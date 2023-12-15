import { CartContext } from "@contexts";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a ProductProvider");
  }
  return context;
};
