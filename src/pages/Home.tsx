import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { filterProducts, filteredItemsByTitle } from "../utils/products";
import { ProductType } from "../types";
import { Product } from "../components/Product";

export const Home = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState<ProductType[]>([]);

  useEffect(() => {
    if (search) setFilteredItems(filteredItemsByTitle(products, search));
  }, [products, search]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderProducts = () => {
    const itemsToRender = search?.length > 0 ? filteredItems : products;
    if (itemsToRender?.length > 0) {
      return filterProducts(itemsToRender).map((product) => (
        <Product product={product} key={product.id} />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <>
      <main>
        <section className="py-24">
          <div className="container mx-auto">
            <div className="flex flex-col w-full mb-4 px-10">
              <input
                onChange={handleSearch}
                placeholder="Search product"
                value={search}
                className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 focus:outline-none border border-[#e4e4e4] focus:border-black/80 transition-colors duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-10">
              {renderProducts()}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
