import { useCart, useSidebar } from "@hooks";
import { IoMdArrowForward } from "react-icons/io";

export const HeaderSidebar = () => {
  const { itemsAmount } = useCart();
  const { handleClose } = useSidebar();

  return (
    <header className="flex items-center justify-between py-6 border-b">
      <span className="uppercase text-sm font-semibold">
        Shopping Bag ({itemsAmount})
      </span>
      <div
        onClick={handleClose}
        className="cursor-pointer w-8 h-8 flex justify-between items-center"
      >
        <IoMdArrowForward className="text-2xl" />
      </div>
    </header>
  );
};
