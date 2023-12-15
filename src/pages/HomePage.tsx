import { RenderProductsSection, SearchBar } from "@components";

export const HomePage = () => {
  return (
    <main>
      <section className="py-24">
        <div className="container mx-auto">
          <SearchBar />
          <RenderProductsSection />
        </div>
      </section>
    </main>
  );
};
