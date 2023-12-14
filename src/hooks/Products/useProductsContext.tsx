import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export const useProductsContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a ProductProvider");
  }
  return context;
};
