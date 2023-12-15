import { SidebarContext } from "@contexts";
import { useCart } from "@hooks";
import { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemsAmount } = useCart();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-10">
        <Link to={"/"}>
          <div className="flex items-center min-w-[200px] gap-4">
            <img className="w-[40px]" src={Logo} alt="Logo Ecommerce" />
            <h1 className="text-2xl font-bold">FashionLab</h1>
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemsAmount}
          </div>
        </div>
      </div>
    </header>
  );
};
