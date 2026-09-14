import photo from "../assets/photo.png";
import fleur from "../assets/Fleure.png";

export default function Header() {
  return (
    <>
      <div className="w-4/5 h-screen flex justify-center items-center">
        <div className="hover-3d h-4/5 w-4/5  ">
          <div className="relative flex rounded-3xl shadow-lg">
            <div className="w-2/5 h-full flex justify-center items-center">
              <div className="avatar w-2/3">
                <div className="ring-2 ring-fuchsia-500 ring-offset-2 rounded-full">
                  <img alt="photo_profil" src={photo} />
                </div>
              </div>
            </div>
            <div className="w-3/5 h-full flex flex-col text-6xl justify-center items-center text-center font-semibold font-serif bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 bg-clip-text text-transparent decoration-clone">
              Portfolio Farah CHAATOUF
            </div>
            <img
              alt="photo_profil"
              src={fleur}
              className="absolute h-1/5 bottom-0 right-0 -rotate-30"
            />
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
