import { useProduct } from "@hooks";
import { Link } from "react-router-dom";

export const CartItemImage = () => {
  const { id, title, image } = useProduct();

  return (
    <Link to={`/products/${id}`}>
      <img className="max-w-[80px]" src={image} alt={title} />
    </Link>
  );
};
