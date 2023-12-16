import { CartItem } from "@components";
import { CartItemProvider } from "@contexts";
import { useCart } from "@hooks";

export const BodySidebar = () => {
  const { cart } = useCart();

  return (
    <section className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
      {cart.map((item) => (
        <CartItemProvider product={item} key={item.id}>
          <CartItem />
        </CartItemProvider>
      ))}
    </section>
  );
};
