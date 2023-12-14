import { useProductsContext } from "@my-hooks/Products/useProductsContext";
import { filterProducts } from "../../utils/products";
import { Product } from "./Product";

export const RenderProductsSection = () => {
  const { filteredItems, loading, error } = useProductsContext();

  const renderProducts = () => {
    if (!filteredItems || filteredItems.length === 0) {
      return <p className="mt-10 font-semibold">No Results Found</p>;
    }

    return filterProducts(filteredItems).map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-10">
      {loading && <p className="mt-10 font-semibold">Loading products...</p>}
      {error && (
        <p className="mt-10 font-semibold">Error getting products...</p>
      )}
      {!loading && !error && renderProducts()}
    </div>
  );
};
