import { FaArrowRight } from "react-icons/fa";
import { LuBriefcaseBusiness, LuCoffee } from "react-icons/lu";

const Links = () => {
  const LinkTree = [
    {
      name: "Portfolio Website",
      url: "https://fadhilahhfdz.github.io/portfolio-v1/",
      icon: <LuBriefcaseBusiness />,
    },
    {
      name: "Buy Me a Coffee",
      url: "https://teer.id/fadhilah.dev",
      icon: <LuCoffee />,
    },
  ];

  return (
    <div className="space-y-2 w-full">
      {LinkTree.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-between w-full px-1 hover:px-6 py-2 hover:text-white border-2 border-b-4 border-cyan-800 rounded-md overflow-hidden shadow-lg"
        >
          <div className="flex items-center gap-2 p-1">
            <span className="absolute inset-0 bg-cyan-700 dark:bg-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10"></span>
            <span className="absolute left-4 transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <FaArrowRight />
            </span>
            <div className="text-cyan-700 dark:text-cyan-600 group-hover:text-white flex items-center gap-1.5 group-hover:py-1">
              <span className="bg-cyan-700 p-2 rounded-full text-white group-hover:hidden">{link.icon}</span>
              <span className="z-0">{link.name}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
