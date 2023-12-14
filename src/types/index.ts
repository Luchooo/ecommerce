import { ProductType } from "./Product";

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
