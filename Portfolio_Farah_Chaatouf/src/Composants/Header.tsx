import photo from "../assets/photo.png";

export default function Header() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-center items-center">
        <div className="hover-3d h-4/5 w-4/5 ">
          <div className="relative flex justify-center items-center rounded-3xl shadow-lg">
            <div className="w-2/5 h-full flex justify-center items-center">
              <div className="avatar w-4/5">
                <div className="flex justify-center items-center bg-linear-to-r from-blue-800 to-fuchsia-400 rounded-full">
                  <img
                    alt="photo_profil"
                    src={photo}
                    className="w-11/12 h-11/12 rounded-full border-8 border-white"
                  />
                </div>
              </div>
            </div>

            <div className="w-3/5 h-1/3 flex flex-col text-6xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              <div className="text-center w-full">Portfolio</div>
              <div className="text-center w-full">Farah CHAATOUF</div>
              <div className="text-center text-2xl w-full">
                Ingénieure Industrie 4.0
              </div>
            </div>
            <div className="absolute bottom-5 right-10 flex flex-col text-lg justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Disponible dès octobre 2023
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
