import { ProductType } from "../types";

export const filterProducts = (products: ProductType[]): ProductType[] => {
  return products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
};

export const filteredItemsByTitle = (items: ProductType[], title: string) => {
  return items?.filter((item) => {
    return item.title.toLowerCase().includes(title.toLowerCase());
  });
};
