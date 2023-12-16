import { ProductType } from "@types";
import { Dispatch, SetStateAction } from "react";

export interface CartOperationsType {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  clearCart: (product: ProductType) => void;
  increaseAmount: (product: ProductType) => void;
  decreaseAmount: (product: ProductType) => void;
}

export interface CartContextType extends CartOperationsType {
  itemsAmount: number;
  total: number;
}

export type CartEffectsProps = {
  cart: ProductType[];
  setTotal: Dispatch<SetStateAction<number>>;
  setItemsAmount: Dispatch<SetStateAction<number>>;
};

export type CartAction = {
  type: string;
  product: ProductType;
};

export type CartItemAmountProps = {
  cartItem: ProductType;
  operation: "increase" | "decrease";
};
