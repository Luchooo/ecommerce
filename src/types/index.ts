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

export type SidebarContextType = {
  isOpen: boolean;
  handleClose: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemsAmount: number;
  total: number;
};

export type ProductContextType = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};
