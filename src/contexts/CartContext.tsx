import { ReactNode, createContext, useEffect, useState } from "react";
import { CartContextType } from "../types";
import { ProductType } from "../types/Product";

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
  const [cart, setCart] = useState<ProductType[]>([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount * currentItem.price;
      }, 0);
      setTotal(total);
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemsAmount(amount);
    }
  }, [cart]);

  const addToCart = (product: ProductType) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item: ProductType) => {
      return item.id === product.id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item: ProductType) => {
        if (product.id === item.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item: ProductType) => item.id === id);
    if (cartItem) {
      addToCart(cartItem);
    } else {
      console.error(`Product with id ${id} not found in the cart.`);
    }
  };

  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item: ProductType) => item.id === id);
    if (cartItem) {
      if (cartItem.amount === 1) {
        removeFromCart(id);
      } else {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      }
    } else {
      console.error(`Product with id ${id} not found in the cart.`);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemsAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
