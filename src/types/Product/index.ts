import { ChangeEvent } from "react";

type Rating = {
  rate: number;
  count: number;
};

export type ProductType = {
  title: string;
  price: number;
  image: string;
  id: number;
  description: string;
  category: string;
  amount: number;
  rating: Rating;
};

export type ProductContextProps = {
  products: ProductType[];
  status: string;
  search: string;
  handleSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  filteredItems: ProductType[];
};

export type ProductImageProps = {
  image: string;
  title: string;
};
