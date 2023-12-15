import { ProductType } from "@types";
import { Dispatch, SetStateAction } from "react";

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

export type CartEffectsProps = {
  cart: ProductType[];
  setTotal: Dispatch<SetStateAction<number>>;
  setItemsAmount: Dispatch<SetStateAction<number>>;
};
