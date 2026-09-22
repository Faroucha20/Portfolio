export default function Menu3() {
  return (
    <>
      <div className="w-4/5 h-screen flex flex-col justify-start items-center p-10 space-y-5">
        <div className="w-full flex h-1/10 justify-center ">
          <button className="flex justify-start font-bold items-center shadow-lg p-5 text-white rounded-lg transition duration-500 ease-in-out h-full w-1/5 transform hover:-translate-y-1 hover:scale-110 bg-linear-to-r from-blue-800 to-fuchsia-400">
            Experience
          </button>
        </div>
        <div className="w-full flex justify-center h-1/10 space-x-10">
          {" "}
          <button className="flex justify-start font-bold items-center shadow-lg p-5 text-white rounded-lg transition duration-500 ease-in-out h-full w-1/5 transform hover:-translate-y-1 hover:scale-110 bg-linear-to-r from-blue-800 to-fuchsia-400">
            Formation / Diplômes
          </button>
          <button className="flex justify-start font-bold items-center shadow-lg p-5 text-white rounded-lg transition duration-500 ease-in-out h-full w-1/5 transform hover:-translate-y-1 hover:scale-110 bg-linear-to-r from-blue-800 to-fuchsia-400">
            Projet
          </button>
        </div>
        <div className="w-full flex justify-center h-1/10">
          {" "}
          <button className="flex justify-start font-bold items-center shadow-lg p-5 text-white rounded-lg transition duration-500 ease-in-out h-full w-1/5 transform hover:-translate-y-1 hover:scale-110 bg-linear-to-r from-blue-800 to-fuchsia-400">
            Compétences
          </button>
        </div>
      </div>
    </>
  );
}
