import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  const icons = [
    {
      social: <FaFacebook />,
      url: "https://facebook.com/",
    },
    {
      social: <FaTwitter />,
      url: "https://twitter.com/",
    },
    {
      social: <FaInstagram />,
      url: "https://instagram.com/",
    },
  ];

  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center gap-6">
          {icons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.url}
              target="_blank"
              className="h-full flex justify-center items-center cursor-pointer text-2xl transition duration-150 ease-in-out hover:scale-110"
            >
              {icon.social}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full p-4 text-center uppercase font-medium">
        2023{" "}
        <Link className="text-white" to={"/"}>
          FashionLab
        </Link>
      </div>
    </footer>
  );
};
