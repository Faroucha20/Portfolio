export default function Menu4() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-start items-center p-10">
        <div className="w-full h-full flex justify-center items-start space-x-4 text-xl">
          
          <button className="flex justify-center text-center font-bold items-center shadow-lg p-1 rounded-full transition duration-500 ease-in-out aspect-square w-1/8 transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-blue-800 to-fuchsia-400 hover:rotate-10">
            <div className="flex items-center justify-center bg-white w-11/12 h-11/12 rounded-full text-center text-black">Expérience</div>
            
          </button>

          <button className="flex justify-center text-center font-bold items-center shadow-lg p-5 text-white rounded-full transition duration-500 ease-in-out aspect-square w-1/8 transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-blue-800 to-fuchsia-400 text-shadow-lg/30">
            Formation / Diplômes
          </button>
          
          <button className="flex justify-center text-center font-bold items-center shadow-lg p-5 text-white rounded-full transition duration-500 ease-in-out aspect-square w-1/8 transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-blue-800 to-fuchsia-400 hover:rotate-10">
            Projets
          </button>
          
          <button className="flex justify-center text-center font-bold items-center shadow-lg p-5 text-white rounded-full transition duration-500 ease-in-out aspect-square w-1/8 transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-blue-800 to-fuchsia-400">
            Compétences
          </button>
          
        </div>
      </div>
    </>
  );
}