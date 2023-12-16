import { CartItemPrice, CartItemQuantity, CartItemTitle } from "@components";
import { useCart, useProduct } from "@hooks";
import { IoMdClose } from "react-icons/io";

export const CartItemDetails = () => {
  const { id } = useProduct();
  const { removeFromCart } = useCart();

  return (
    <section className="w-full flex flex-col">
      <div className="flex justify-between mb-2">
        <CartItemTitle />
        <button
          onClick={() => removeFromCart(id)}
          className="text-xl cursor-pointer"
        >
          <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
        </button>
      </div>
      <div className="flex gap-x-2 h-[36px] text-sm">
        <CartItemQuantity />
        <CartItemPrice />
      </div>
    </section>
  );
};
