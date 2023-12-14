import { useProductsData } from "@my-hooks/Products/useProductsData";
import { useProductsFilter } from "@my-hooks/Products/useProductsFilter";
import { ProductContextProps } from "@my-types/Product";
import { ReactNode, createContext } from "react";

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  loading: false,
  error: false,
  search: "",
  handleSearch: () => {},
  filteredItems: [],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { error, loading, products } = useProductsData();
  const { filteredItems, handleSearch, search } = useProductsFilter(products);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        search,
        handleSearch,
        filteredItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
