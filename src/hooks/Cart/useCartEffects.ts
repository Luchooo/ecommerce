import { CartEffectsProps } from "@types";
import { useEffect } from "react";

const calculateTotalAndAmount = ({
  cart,
  setTotal,
  setItemsAmount,
}: CartEffectsProps) => {
  const newTotal = cart.reduce(
    (acc, currentItem) => acc + currentItem.amount * currentItem.price,
    0
  );
  const newItemsAmount = cart.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );

  setTotal(newTotal);
  setItemsAmount(newItemsAmount);
};

export const useCartEffects = ({
  cart,
  setTotal,
  setItemsAmount,
}: CartEffectsProps) => {
  useEffect(() => {
    calculateTotalAndAmount({ cart, setTotal, setItemsAmount });
  }, [cart, setTotal, setItemsAmount]);
};
