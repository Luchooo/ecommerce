import { ProductType } from "@types";
import { Link } from "react-router-dom";

export const FooterProduct = ({ category, id, title, price }: ProductType) => {
  return (
    <>
      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <Link to={`products/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <div className="font-semibold">${price}</div>
    </>
  );
};
