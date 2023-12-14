import { ReactNode, createContext } from "react";
import { ProductContextProps } from "../types/Product";
import { useProductsData } from "../hooks/Products/useProductsData";
import { useProductsFilter } from "../hooks/Products/useProductsFilter";

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
