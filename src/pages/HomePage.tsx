import { RenderProductsSection } from "../components/Home/RenderProductsSection";
import { SearchBar } from "../components/Home/SearchBar";

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
