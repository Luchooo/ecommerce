import { CartContext } from "@my-contexts/CartContext";
import { ProductType } from "@my-types/Product";
import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Product = ({ product }: { product: ProductType }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <section>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden transition group">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-0 -right-11 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:right-5 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`products/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black/80 drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`products/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </section>
  );
};
