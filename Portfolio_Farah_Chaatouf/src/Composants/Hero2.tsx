import photo from "../assets/photo_moi.jpg";

export default function Hero() {
  return (
    <>
      <div className="lg:w-4/5 w-11/12 md:h-full max-md:h-70 sm:w-3/5 sm:h-96 lg:mt-20 flex justify-center items-center">
        <div className="relative lg:w-4/5 w-full h-4/5 mb-5 shadow-lg rounded-3xl flex">
          <div className="lg:w-2/5 w-1/2 lg:h-full h-full flex justify-center items-center lg:ml-12">
            <div className="avatar w-full h-full flex justify-center items-center">
              <img
                alt="photo_profil"
                src={photo}
                className="rounded-3xl h-5/6 lg-w-11/12 w-9/12 shadow-xl object-cover object-[50%_10%]"
              />
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center lg:w-3/5 w-1/2 h-3/10 top-1/3">
            <div className="w-full h-full flex flex-col lg:text-7xl md:text-4xl text-xl text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Portfolio
            </div>
            <div className="w-full h-full flex flex-col lg:text-4xl md:text-xl text-md justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Farah Chaatouf
            </div>
            <div className="w-full h-full flex flex-col lg:text-lg md:text-md text-xs justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Ingénieure Industrie 4.0
            </div>
          </div>
          <div className="absolute bottom-5 md:right-10 right-3">
            <div className="lg:text-lg text-xs justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone animate-pulse">
              Disponible dès janvier 2027
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
