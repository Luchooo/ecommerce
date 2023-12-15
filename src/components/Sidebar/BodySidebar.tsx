import { CartItem } from "@components";
import { useCart } from "@hooks";

export const BodySidebar = () => {
  const { cart } = useCart();

  return (
    <section className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
      {cart.map((item) => (
        <CartItem product={item} key={item.id} />
      ))}
    </section>
  );
};
