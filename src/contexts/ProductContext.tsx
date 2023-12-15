import { useProductsData, useProductsFilter } from "@hooks";
import { ProductContextProps } from "@types";
import { ReactNode, createContext } from "react";

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  status: "idle",
  search: "",
  handleSearch: () => {},
  filteredItems: [],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { status, products } = useProductsData();
  const { filteredItems, handleSearch, search } = useProductsFilter(products);

  return (
    <ProductContext.Provider
      value={{
        products,
        status,
        search,
        handleSearch,
        filteredItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
