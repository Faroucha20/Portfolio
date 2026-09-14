import photo from "../assets/photo.png";

export default function Hero() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-center items-center">
        <div className="w-4/5 h-4/5 mb-5 shadow-lg shadow-200 rounded-3xl flex border-0 border-fuchsia-500">
          <div className="w-3/5 h-full flex justify-center items-center ">
            <div className="avatar w-full h-full flex justify-center items-center">
              <img
                alt="photo_profil"
                src={photo}
                className="rounded-3xl h-10/12 w-10/12"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-2/5 h-1/5 right-1/5 top-1/3 animate-pulse">
            <div className="w-full h-full flex flex-col text-7xl justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 bg-clip-text text-transparent decoration-clone">
              Portfolio
            </div>
            <div className="w-full h-full flex flex-col text-4xl justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 bg-clip-text text-transparent decoration-clone">
              Farah Chaatouf
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
