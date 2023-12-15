import { useCartOperations } from "@hooks";
import { CartContextType } from "@types";
import { ReactNode, createContext } from "react";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  itemsAmount: 0,
  total: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartOperations = useCartOperations();

  return (
    <CartContext.Provider value={cartOperations}>
      {children}
    </CartContext.Provider>
  );
};
