import { ProductType } from "@types";

export const filterProducts = (products: ProductType[]): ProductType[] => {
  return products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
};
