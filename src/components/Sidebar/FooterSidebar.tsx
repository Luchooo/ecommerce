import { useCart, useProduct } from "@hooks";
import { FiTrash2 } from "react-icons/fi";

export const FooterSidebar = () => {
  const { clearCart, itemsAmount, total } = useCart();
  const product = useProduct();

  return (
    <footer className="flex flex-col gap-y-3 py-4 mt-4">
      <div className="flex w-full justify-between items-center">
        <div className="uppercase font-semibold">
          <span className="mr-2">Total:</span>$ {total.toFixed(2)}
        </div>
        <button
          onClick={() => clearCart(product)}
          className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
        >
          <FiTrash2 />
        </button>
      </div>
      <button
        disabled={itemsAmount === 0}
        className="disabled:bg-gray-200 bg-black/80 flex p-4 justify-center items-center text-white w-full font-medium hover-item before:content-['Checkout'] after:transition-all before:hover:content-['Comming_soon...']"
      ></button>
    </footer>
  );
};
