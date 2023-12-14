import { CartContext } from "@my-contexts/CartContext";
import { ProductContext } from "@my-contexts/ProductContext";
import { ProductType } from "@my-types/Product";
import { useContext } from "react";
import ReactStars from "react-rating-star-with-type";
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const parsedProductId = productId ? parseInt(productId) : undefined;

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item: ProductType) => {
    return item.id === parsedProductId;
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center font-medium text-2xl">
        Loading...
      </section>
    );
  }
  const {
    title,
    price,
    description,
    image,
    rating = { rate: 0, count: 0 },
  } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="flex justify-center lg:justify-start my-4 gap-x-4">
              <div className="text-xl text-red-500 font-medium">$ {price}</div>

              <div className="flex flex-col">
                <ReactStars value={rating?.rate} activeColor="#000" />
                <p>{rating?.count} Reviews</p>
              </div>
            </div>
            <p className="mb-8 px-10 lg:px-0">{description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-black/80 py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
