import { Link } from "react-router-dom";

export default function Menu2() {
  return (
    <>
      <div className="w-11/12 h-full flex py-12">
        <div className="w-full h-full flex space-x-4 text-xl">
          <Link
            to="/experiences"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-full w-1/4 border-l-4 border-l-blue-800 transform hover:-translate-y-1 hover:scale-110 rounded-r-lg"
          >
            Experiences
          </Link>
          
          <Link 
            to="/diplomes"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-full w-1/4 border-l-4 border-l-fuchsia-800 transform hover:-translate-y-1 hover:scale-110 rounded-r-lg"
          >
            Formations / Diplômes
          </Link>
          
          <Link 
            to="/projets"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-full w-1/4 border-l-4 border-l-fuchsia-600 transform hover:-translate-y-1 hover:scale-110 rounded-r-lg"
          >
            Projets
          </Link>
          
          <Link 
            to="/competences"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-full w-1/4 border-l-4 border-l-fuchsia-400 transform hover:-translate-y-1 hover:scale-110 rounded-r-lg"
          >
            Compétences
          </Link>
          
        </div>
      </div>
    </>
  );
}