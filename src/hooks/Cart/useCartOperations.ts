import { cartReducer, initialState } from "@reducers";
import { CartOperationsType, ProductType } from "@types";
import { useReducer } from "react";

export const useCartOperations = (): CartOperationsType => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: ProductType) =>
    dispatch({
      type: "ADD_TO_CART",
      product: product,
    });

  const removeFromCart = (product: ProductType) =>
    dispatch({
      type: "REMOVE_TO_CART",
      product: product,
    });

  const clearCart = (product: ProductType) =>
    dispatch({
      type: "CLEAR_CART",
      product: product,
    });

  const increaseAmount = (product: ProductType) =>
    dispatch({
      type: "INCREASE_AMOUNT",
      product: product,
    });

  const decreaseAmount = (product: ProductType) =>
    dispatch({
      type: "DECREASE_AMOUNT",
      product: product,
    });

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
  };
};
