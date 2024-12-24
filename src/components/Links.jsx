import { FaArrowRight } from "react-icons/fa";

const Links = () => {
  const LinkTree = [
    { name: "Personal Website", url: "", icon: "" },
    { name: "Curriculum Vitae", url: "", icon: "" },
    { name: "Buy Me a Coffee", url: "", icon: "" },
  ];

  return (
    <div className="space-y-2 w-full">
      {LinkTree.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-between w-full px-6 py-2 hover:text-white border-2 border-b-4 border-cyan-800 rounded-md overflow-hidden"
        >
          <div className="flex items-center gap-2 p-1">
            <span className="absolute inset-0 bg-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10"></span>
            <span className="absolute left-4 transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <FaArrowRight />
            </span>
            <p className="z-0 text-cyan-700 group-hover:text-white">
              {link.icon} {link.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
