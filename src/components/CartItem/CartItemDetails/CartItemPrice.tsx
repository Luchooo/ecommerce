import { useProduct } from "@hooks";

export const CartItemPrice = () => {
  const { price, amount } = useProduct();

  return (
    <>
      <span className="flex-1 flex items-center justify-around">$ {price}</span>
      <span className="flex-1 flex items-center justify-end text-black/80 font-medium">
        {`$ ${(price * amount).toFixed(2)}`}
      </span>
    </>
  );
};
