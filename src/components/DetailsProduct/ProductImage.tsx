import { ProductImageProps } from "@types";

export const ProductImage = ({ image, title }: ProductImageProps) => {
  return (
    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
      <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
    </div>
  );
};
