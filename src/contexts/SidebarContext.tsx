import { ReactNode, createContext, useState } from "react";
import { SidebarContextType } from "../types";

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  handleClose: () => {},
  setIsOpen: () => {},
});
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleClose, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
