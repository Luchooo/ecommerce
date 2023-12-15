import { BodySidebar, FooterSidebar, HeaderSidebar } from "@components";
import { useSidebar } from "@hooks";

export const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <HeaderSidebar />
      <BodySidebar />
      <FooterSidebar />
    </aside>
  );
};
