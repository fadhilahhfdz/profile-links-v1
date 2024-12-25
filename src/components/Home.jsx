import profil from "../assets/img/profil.jpg";
import Contacts from "./Contacts";
import Links from "./Links";
import Socials from "./Socials";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-poppins">
      <div className="p-8 bg-white shadow-lg rounded-lg text-center w-full sm:w-96 h-full">
        <img
          src={profil}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 mt-16"
        />
        <h1 className="text-2xl font-semibold mb-2">Fadhilah Hafidz Pradana</h1>
        <p className="text-gray-600 mb-4">Backend Developer</p>
        <Links />
        <p className="text-xl font-medium mt-7 mb-2 flex justify-start items-center">
          Contact For Business
        </p>
        <Contacts />
        <p className="text-xl font-medium mt-7 mb-2 flex justify-start items-center">
          Socials
        </p>
        <Socials />
        <p className="mt-7">
          Made by{" "}
          <a
            href="https://www.instagram.com/fadhilah.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-800"
          >
            fadhilah.dev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
