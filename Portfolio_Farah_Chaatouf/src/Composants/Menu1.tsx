export default function Menu1() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-start items-center p-10">
        <div className="w-4/5 h-4/5 flex flex-col justify-center items-start space-y-4 text-xl">
          <button className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-1/10 w-2/5 border-l-4 border-l-blue-800 transform hover:-translate-y-1 hover:scale-110 ">
            Experience
          </button>
          <button className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-1/10 w-2/5 border-l-4 border-l-fuchsia-800 transform hover:-translate-y-1 hover:scale-110">
            Formation / Diplômes
          </button>
          <button className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-1/10 w-2/5 border-l-4 border-l-fuchsia-600 transform hover:-translate-y-1 hover:scale-110">
            Projet
          </button>
          <button className="flex justify-start font-bold items-center shadow-lg p-5 transition duration-500 ease-in-out h-1/10 w-2/5 border-l-4 border-l-fuchsia-400 transform hover:-translate-y-1 hover:scale-110">
            Compétences
          </button>
          
        </div>
      </div>
    </>
  );
}
