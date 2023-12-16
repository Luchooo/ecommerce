import { ProductType } from "@types";
import { ReactNode, createContext } from "react";

export const CartItemContext = createContext<ProductType>({
  amount: 0,
  category: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  rating: { count: 0, rate: 0 },
  title: "",
});

export const CartItemProvider = ({
  children,
  product,
}: {
  children: ReactNode;
  product: ProductType;
}) => {
  return (
    <CartItemContext.Provider value={product}>
      {children}
    </CartItemContext.Provider>
  );
};
