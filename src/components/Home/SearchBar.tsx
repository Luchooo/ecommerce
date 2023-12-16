import { useProducts } from "@hooks";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
  const { handleSearch, search } = useProducts();

  return (
    <div className="flex flex-row mb-4 mt-6 mx-10 ">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search product"
          value={search}
          className="w-full bg-white/20 py-2 pl-10 pr-4 focus:outline-none border border-[#e4e4e4] focus:border-black/80 transition-colors duration-300"
        />
      </div>
    </div>
  );
};
