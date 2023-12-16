import { API_BASE_URL } from "@constants";
import { ProductType } from "@types";
import { localStorage } from "@utils";
import { useEffect, useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [status, setStatus] = useState("idle");
  const { getItem, setItem } = localStorage("products");

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const storedProducts = getItem<ProductType[]>();
        if (storedProducts && storedProducts.length > 0) {
          setProducts(storedProducts);
          setStatus("success");
        } else {
          const response = await fetch(API_BASE_URL);
          const data: ProductType[] = await response.json();
          setProducts(data);
          setStatus("success");
          setItem<ProductType[]>(data);
        }
      } catch (error) {
        setStatus("error");
      }
    };
    fetchProducts();
  }, []);

  return { products, status };
};
