import { Link } from "react-router-dom";

export const ProductNotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center ">
      <span className="font-medium text-2xl">Product not found! 💔</span>
      <Link to="/" className="mt-8 bg-black/80 flex p-4 text-white">
        Go back home
      </Link>
    </section>
  );
};
