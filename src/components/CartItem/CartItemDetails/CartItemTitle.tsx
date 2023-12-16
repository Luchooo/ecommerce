import { useProduct } from "@hooks";
import { Link } from "react-router-dom";

export const CartItemTitle = () => {
  const { id, title } = useProduct();

  return (
    <Link
      to={`/products/${id}`}
      className="text-sm uppercase font-medium max-w-[240px] text-black/80 hover:underline"
    >
      {title}
    </Link>
  );
};
