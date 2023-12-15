import { LoaderProduct } from "@components";

export const LoaderProducts = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoaderProduct key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
