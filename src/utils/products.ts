import { ProductType } from "@my-types/Product";

export const filterProducts = (products: ProductType[]): ProductType[] => {
  return products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
};
