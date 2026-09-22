import photo from "../assets/photo.png";

export default function Hero() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-center items-end">
        <img
          alt="photo_profil"
          src={photo}
          className="absolute z-0 rounded-4xl bg-opacity-80 shadow-lg mask-t-from-75% mask-b-from-75% mask-l-from-75% mask-r-from-75%"
        />
        <div className="z-10 w-3/5 h-1/3 flex flex-col text-6xl justify-center items-end text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
          <div className="text-center w-full">Portfolio</div>
          <div className="text-center w-full">Farah CHAATOUF</div>
          <div className="text-center text-2xl w-full">
            Ingénieure Industrie 4.0
          </div>
        </div>
      </div>
    </>
  );
}
