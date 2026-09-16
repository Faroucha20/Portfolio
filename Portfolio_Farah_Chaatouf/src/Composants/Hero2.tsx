import photo from "../assets/photo.png";

export default function Hero() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-center items-center">
        <div className="relative w-4/5 h-4/5  mb-5 shadow-lg shadow-200 rounded-3xl flex">
          <div className="w-3/5 h-full flex justify-center items-center ">
            <div className="avatar w-full h-full flex justify-center items-center">
              <img
                alt="photo_profil"
                src={photo}
                className="rounded-3xl h-10/12 w-10/12"
              />
            </div>
          </div>
          <div className="relative  flex flex-col w-2/5 h-2/10 right-1/5 top-1/3 animate-pulse">
            <div className="w-full h-full flex flex-col text-7xl justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Portfolio
            </div>
            <div className="w-full h-full flex flex-col text-4xl justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Farah Chaatouf
            </div>
            <div className="w-full h-full flex flex-col text-lg justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Ingénieure Industrie 4.0
            </div>
          </div>
          <div className="absolute bottom-5 right-10 ">
            <div className="text-lg justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Disponible dès octobre 2026
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
