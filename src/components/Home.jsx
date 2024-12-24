import profil from "../assets/img/profil.jpg";
import Links from "./Links";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg text-center w-full sm:w-96 h-screen">
        <img
          src={profil}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 mt-16"
        />
        <h1 className="text-2xl font-semibold mb-2">Fadhilah Hafidz Pradana</h1>
        <p className="text-gray-600 mb-4">Backend Developer</p>
        <Links />
      </div>
    </div>
  );
};

export default Home;
