import { useProductsContext } from "../../hooks/Products/useProductsContext";

export const SearchBar = () => {
  const { handleSearch, search } = useProductsContext();

  return (
    <div className="flex flex-col w-full mb-4 px-10 mt-6">
      <input
        onChange={handleSearch}
        placeholder="Search product"
        value={search}
        className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 focus:outline-none border border-[#e4e4e4] focus:border-black/80 transition-colors duration-300"
      />
    </div>
  );
};
