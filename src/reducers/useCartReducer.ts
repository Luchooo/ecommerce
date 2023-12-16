import { ActionTypes } from "@constants";
import { CartAction, CartItemAmountProps, ProductType } from "@types";
import { localStorage } from "@utils";

const { setItem, getItem, removeItem } = localStorage("cart");

export const initialState = getItem<ProductType[]>() || [];

const updateCartItemAmount = ({
  cartItem,
  operation,
}: CartItemAmountProps): ProductType => {
  if (operation === "increase") {
    return {
      ...cartItem,
      amount: cartItem.amount + 1,
    };
  } else if (operation === "decrease") {
    return {
      ...cartItem,
      amount: cartItem.amount - 1,
    };
  } else {
    throw new Error("Invalid operation. Use 'increase' or 'decrease'.");
  }
};

const findCartItemIndex = (id: number, cart: ProductType[]) =>
  cart.findIndex((item) => item.id === id);

const addtoCart = (product: ProductType, state: ProductType[]) => {
  const { id } = product;
  const existingItemIndex = findCartItemIndex(id, state);
  if (existingItemIndex !== -1) {
    const newCart = [...state];
    newCart[existingItemIndex] = updateCartItemAmount({
      cartItem: newCart[existingItemIndex],
      operation: "increase",
    });
    setItem<ProductType[]>(newCart);
    return newCart;
  } else {
    const newItem = { ...product, amount: 1 };
    const newCart = [...state, newItem];
    setItem<ProductType[]>(newCart);
    return newCart;
  }
};

const removeFromCart = ({ id }: ProductType, state: ProductType[]) => {
  const newCart = state.filter((item) => item.id !== id);
  setItem<ProductType[]>(newCart);
  return newCart;
};

export const cartReducer = (
  state: ProductType[],
  action: CartAction
): ProductType[] => {
  const { type, product } = action;
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      return addtoCart(product, state);
    }

    case ActionTypes.REMOVE_TO_CART: {
      return removeFromCart(product, state);
    }

    case ActionTypes.CLEAR_CART: {
      removeItem();
      return [];
    }

    case ActionTypes.INCREASE_AMOUNT: {
      const { id } = product;
      const existingItemIndex = findCartItemIndex(id, state);
      if (existingItemIndex !== -1) {
        return addtoCart(state[existingItemIndex], state);
      } else {
        throw Error(`Product with id ${id} not found in the cart.`);
      }
    }

    case ActionTypes.DECREASE_AMOUNT: {
      const { id } = product;
      const existingItemIndex = findCartItemIndex(id, state);
      if (existingItemIndex !== -1) {
        const cartItem = state[existingItemIndex];
        if (cartItem.amount === 1) {
          return removeFromCart(product, state);
        } else {
          const newCart = [...state];
          newCart[existingItemIndex] = updateCartItemAmount({
            cartItem: newCart[existingItemIndex],
            operation: "decrease",
          });
          setItem<ProductType[]>(newCart);
          return newCart;
        }
      } else {
        throw Error(`Product with id ${id} not found in the cart.`);
      }
    }

    default: {
      throw new Error("Unknown action type: " + type);
    }
  }
};
