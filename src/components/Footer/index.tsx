import { socialIconsData } from "@utils";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <nav className="mb-6 flex justify-center gap-6 container px-6 pt-6">
        {socialIconsData.map((icon, idx) => (
          <a
            key={idx}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex justify-center items-center cursor-pointer text-2xl transition duration-150 ease-in-out hover:scale-110"
          >
            {icon.social}
          </a>
        ))}
      </nav>
      <div className="w-full p-4 text-center uppercase font-medium">
        2023{" "}
        <Link className="text-white" to={"/"}>
          FashionLab
        </Link>
      </div>
    </footer>
  );
};
