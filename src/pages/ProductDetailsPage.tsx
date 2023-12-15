import { ProductDetails, ProductImage, ProductNotFound } from "@components";
import { useProducts } from "@hooks";
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { products } = useProducts();
  const parsedProductId = parseInt(productId ?? "0", 10);
  const product = products.find((item) => item.id === parsedProductId);

  if (!product) {
    return <ProductNotFound />;
  }
  const { title, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 lg:h-screen flex items-center">
      <div className="container mx-auto">
        <article className="flex flex-col lg:flex-row items-center lg:mt-0 mt-4">
          <ProductImage image={image} title={title} />
          <ProductDetails product={product} />
        </article>
      </div>
    </section>
  );
};
