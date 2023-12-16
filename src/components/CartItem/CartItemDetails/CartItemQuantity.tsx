import { useCart, useProduct } from "@hooks";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export const CartItemQuantity = () => {
  const { id, amount } = useProduct();
  const { increaseAmount, decreaseAmount } = useCart();

  return (
    <div className="flex flex-1 max-w-[100px] items-center h-full border text-black/80 font-medium">
      <button
        onClick={() => decreaseAmount(id)}
        className="flex-1 h-full flex justify-center items-center cursor-pointer"
      >
        <IoMdRemove />
      </button>
      <span className="h-full flex justify-center items-center px-2">
        {amount}
      </span>
      <button
        onClick={() => increaseAmount(id)}
        className="flex-1 h-full flex justify-center items-center cursor-pointer"
      >
        <IoMdAdd />
      </button>
    </div>
  );
};
