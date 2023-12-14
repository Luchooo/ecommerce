export type SidebarContextType = {
  isOpen: boolean;
  handleClose: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
