import { useCart } from "@hooks";
import { ProductType } from "@types";
import ReactStars from "react-rating-star-with-type";

export const ProductDetails = ({ product }: { product: ProductType }) => {
  const { title, price, rating, description, category } = product;
  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-sm capitalize mb-2">{category}</h2>
      <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
        {title}
      </h1>
      <div className="flex justify-center lg:justify-start my-4 gap-x-4">
        <div className="text-xl text-red-500 font-medium">$ {price}</div>
        <div className="flex flex-col">
          <ReactStars value={rating.rate} activeColor="#000" />
          <p>{rating.count} Reviews</p>
        </div>
      </div>
      <p className="mb-8 px-10 lg:px-0">{description}</p>
      <button
        onClick={handleClick}
        className="bg-black/80 py-4 px-8 text-white mb-10"
      >
        Add to cart
      </button>
    </div>
  );
};
