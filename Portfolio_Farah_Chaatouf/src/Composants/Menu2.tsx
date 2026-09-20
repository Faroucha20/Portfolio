import { Link } from "react-router-dom";

export default function Menu2() {
  return (
    <>
      <div className="w-4/5 h-full flex justify-start items-center p-10">
        <div className="w-full h-full flex justify-center items-start space-x-4 text-xl">
          
          <Link
            to="/experiences"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-2/12 w-1/4 border-l-4 border-l-blue-800 transform hover:-translate-y-1 hover:scale-110"
          >
            Experience
          </Link>
          
          <Link 
            to="/diplomes"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-2/12 w-1/4 border-l-4 border-l-fuchsia-800 transform hover:-translate-y-1 hover:scale-110"
          >
            Formation / Diplômes
          </Link>
          
          <Link 
            to="/projets"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-2/12 w-1/4 border-l-4 border-l-fuchsia-600 transform hover:-translate-y-1 hover:scale-110"
          >
            Projet
          </Link>
          
          <Link 
            to="/competences"
            className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-2/12 w-1/4 border-l-4 border-l-fuchsia-400 transform hover:-translate-y-1 hover:scale-110"
          >
            Compétences
          </Link>
          
        </div>
      </div>
    </>
  );
}