import { ProductType } from "@my-types/Product";
import { BodyProduct } from "./BodyProduct";
import { FooterProduct } from "./FooterProduct";

export const Product = ({ product }: { product: ProductType }) => {
  return (
    <section>
      <BodyProduct {...product} />
      <FooterProduct {...product} />
    </section>
  );
};
