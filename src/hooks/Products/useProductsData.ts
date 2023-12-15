import { API_BASE_URL } from "@constants";
import { ProductType } from "@types";
import { useEffect, useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};
