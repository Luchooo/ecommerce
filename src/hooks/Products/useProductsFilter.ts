import { ProductType } from "@types";
import { ChangeEvent, useMemo, useState } from "react";

export const useProductsFilter = (products: ProductType[]) => {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo<ProductType[]>(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return { search, filteredItems, handleSearch };
};
