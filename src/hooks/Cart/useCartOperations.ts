import { useCartEffects } from "@hooks";
import { CartContextType, ProductType } from "@types";
import { useState } from "react";

export const useCartOperations = (): CartContextType => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useCartEffects({ cart, setTotal, setItemsAmount });

  const findCartItemIndex = (id: number) =>
    cart.findIndex((item) => item.id === id);

  const updateCart = (newCart: ProductType[]) => {
    setCart(newCart);
  };

  const addToCart = (product: ProductType) => {
    const existingItemIndex = findCartItemIndex(product.id);

    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].amount += 1;
      updateCart(newCart);
    } else {
      const newItem: ProductType = { ...product, amount: 1 };
      updateCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: number): void => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const increaseAmount = (id: number) => {
    const existingItemIndex = findCartItemIndex(id);

    if (existingItemIndex !== -1) {
      addToCart(cart[existingItemIndex]);
    } else {
      console.error(`Product with id ${id} not found in the cart.`);
    }
  };

  const decreaseAmount = (id: number) => {
    const existingItemIndex = findCartItemIndex(id);

    if (existingItemIndex !== -1) {
      const cartItem = cart[existingItemIndex];

      if (cartItem.amount === 1) {
        removeFromCart(id);
      } else {
        const newCart = [...cart];
        newCart[existingItemIndex].amount -= 1;
        updateCart(newCart);
      }
    } else {
      console.error(`Product with id ${id} not found in the cart.`);
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemsAmount,
    total,
  };
};
