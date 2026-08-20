import photo from "../assets/photo.png";

export default function Header() {
  return (
    <>
      <div className="w-full h-40 mb-5 flex">
        <div className="w-1/5 h-full flex justify-center items-center">
          <div className="avatar h-2/3">
            <div className="ring-fuchsia-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
              <img alt="photo_profil" src={photo} />
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full flex flex-col text-3xl justify-center items-center text-white font-semibold font-serif">
        Portfolio Farah CHAATOUF
        </div>
      </div>
    </>
  );
}
