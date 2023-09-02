import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
          ¡Bienvenido a tu app para organizar tus tareas!
        </h1>
        <p className="text-lg text-white mb-6">
          Aumenta tu productividad de manera sencilla y efectiva.
        </p>
        <Link to="/registro">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Inicia sesion
            </span>
          </button>{" "}
        </Link>{" "}
      </div>
      <div className="mt-6 text-white text-sm">
        <p>
          ¿Eres nuevo aquí?{" "}
          <Link
            to="/Register"
            className="underline text-blue-300 hover:text-blue-500"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
