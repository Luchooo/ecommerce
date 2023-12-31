import { LoaderProducts, Product } from "@components";
import { useProducts } from "@hooks";
import { filterProducts } from "@utils";

export const RenderProductsSection = () => {
  const { filteredItems, status } = useProducts();

  const renderProducts = () => {
    if (!filteredItems || filteredItems.length === 0) {
      return <p className="mt-10 font-semibold">No Results Found</p>;
    }

    return filterProducts(filteredItems).map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <>
      {status === "loading" && <LoaderProducts />}
      {status === "error" && (
        <p className="flex items-center justify-center mt-10 font-semibold h-[calc(100vh-428px)] text-xl">
          Error getting products...
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-10">
        {status === "success" && renderProducts()}
      </div>
    </>
  );
};
