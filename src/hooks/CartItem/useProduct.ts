import { CartItemContext } from "@contexts";
import { useContext } from "react";

export const useProduct = () => {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error("useProduct must be used within a CartItemProvider");
  }
  return context;
};
