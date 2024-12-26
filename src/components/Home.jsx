import { CiDark, CiLight } from "react-icons/ci";
import logo from "../assets/img/logo.png";
import Contacts from "./Contacts";
import Links from "./Links";
import Socials from "./Socials";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Typed js
  const el = useRef(null);
  const ketik = useRef(null);

  useEffect(() => {
    ketik.current = new Typed(el.current, {
      strings: ["FullStack Developer", "Backend Developer"],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      ketik.current.destroy();
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : ""
      } flex flex-col items-center justify-center bg-white font-poppins dark:bg-gray-900`}
    >
      <div className="p-8 bg-white dark:bg-gray-900 text-center w-full sm:w-96 h-full">
        <div className="flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="bg-cyan-700 dark:bg-gray-800 text-white dark:text-gray-400 p-1 rounded-md"
          >
            {darkMode ? (
              <CiLight className="w-7 h-7" />
            ) : (
              <CiDark className="w-7 h-7" />
            )}
          </button>
        </div>
        <img
          src={logo}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 mt-9 shadow-lg"
        />
        <h1 className="text-2xl font-semibold mb-2 dark:text-white">
          Fadhilah Hafidz Pradana
        </h1>
        <p className="text-gray-600 mb-4 dark:text-gray-300">
          <span ref={el}></span>
        </p>
        <Links />
        <p className="text-xl font-medium mt-7 mb-2 flex justify-start items-center text-gray-700 dark:text-gray-300">
          Contact For Business
        </p>
        <Contacts />
        <p className="text-xl font-medium mt-7 mb-2 flex justify-start items-center text-gray-700 dark:text-gray-300">
          Socials
        </p>
        <Socials />
        <p className="mt-7 dark:text-white">
          Made by
          <a
            href="https://www.instagram.com/fadhilah.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-800 ml-1"
          >
            fadhilah.dev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
