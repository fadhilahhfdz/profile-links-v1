import { FaArrowRight, FaInstagram, FaTelegram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
  const Contact = [
    {
      name: "Email",
      url: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=fadhilahhafidz010@gmail.com",
      icon: <MdOutlineEmail />,
    },
    {
      name: "DM Instagram",
      url: "https://www.instagram.com/fadhilah.dev/",
      icon: <FaInstagram />,
    },
    {
      name: "Telegram",
      url: "https://t.me/fadhilahhfdz",
      icon: <FaTelegram />,
    },
  ];

  return (
    <div className="space-y-2 w-full">
      {Contact.map((kontak, index) => (
        <a
          key={index}
          href={kontak.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-between w-full px-1 hover:px-6 py-2 hover:text-white border-2 border-b-4 border-purple-800 rounded-md overflow-hidden"
        >
          <div className="flex items-center gap-2 p-1">
            <span className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10"></span>
            <span className="absolute left-4 transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <FaArrowRight />
            </span>
            <div className="text-purple-500 group-hover:text-white flex items-center gap-1.5 group-hover:py-1">
              <span className="bg-purple-700 p-2 rounded-full text-white group-hover:hidden">
                {kontak.icon}
              </span>
              <span className="z-0">{kontak.name}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Contacts;
