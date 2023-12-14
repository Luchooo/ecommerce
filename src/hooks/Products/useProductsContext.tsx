import { ProductContext } from "@my-contexts/ProductContext";
import { useContext } from "react";

export const useProductsContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a ProductProvider");
  }
  return context;
};
