import { BodyProduct, FooterProduct } from "@components";
import { ProductType } from "@types";

export const Product = ({ product }: { product: ProductType }) => {
  return (
    <section>
      <BodyProduct {...product} />
      <FooterProduct {...product} />
    </section>
  );
};
