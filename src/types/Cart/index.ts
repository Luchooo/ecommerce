import { ProductType } from "@my-types/Product";

export type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemsAmount: number;
  total: number;
};
