import { API_BASE_URL } from "@constants";
import { ProductType } from "@types";
import { useEffect, useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const response = await fetch(API_BASE_URL);
        const data: ProductType[] = await response.json();
        setProducts(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };
    fetchProducts();
  }, []);

  return { products, status };
};
