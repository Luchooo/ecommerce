import { CartItemDetails, CartItemImage } from "@components";

export const CartItem = () => {
  return (
    <article className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <CartItemImage />
        <CartItemDetails />
      </div>
    </article>
  );
};
