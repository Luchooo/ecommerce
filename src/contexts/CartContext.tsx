import { useCartEffects, useCartOperations } from "@hooks";
import { CartContextType } from "@types";
import { ReactNode, createContext, useState } from "react";

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
  const [itemsAmount, setItemsAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const cartOperations = useCartOperations();
  const { cart } = cartOperations;
  useCartEffects({ cart, setTotal, setItemsAmount });

  return (
    <CartContext.Provider
      value={{
        ...cartOperations,
        itemsAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
