export default function Base() {
  return (
    <>
      <div className="w-full h-full bg-purple-200">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-76 mb-5 border-4 border-fuchsia-300">
            Header
            <div>Photo</div>
          </div>
          <div className="w-1/2 h-12 m-5 border-4 border-fuchsia-300">
            Téléchargements CV basique
          </div>
          <div className="w-1/2 h-76 m-5 border-4 flex border-fuchsia-300">
            <div className="w-1/2 h-full p-2 border-2 border-blue-300">
              Diplômes
            </div>
            <div className="w-1/2 p-2 h-full border-2 border-blue-300">
              Image dynamique
            </div>
          </div>
          <div className="w-1/2 h-76 m-5 border-4 flex border-fuchsia-300 items-end">
            <div className="w-1/2 h-full p-2 border-2 border-blue-300">
              Image dynamique
            </div>
            <div className="w-1/2 p-2 h-full border-2 border-blue-300">
              Expérience Professionnelle
            </div>
          </div>
          <div className="w-1/2 h-fit m-5 border-4 flex flex-col border-fuchsia-300">
            Projets
            <div className="w-full h-96 my-2 p-2 border-2 border-blue-300">
              Escape Game VR
            </div><div className="w-full h-96 my-2 p-2 border-2 border-blue-300">
              Contact
            </div>
          </div>
          <div className="w-full h-76 mt-5 flex justify-between border-4 border-fuchsia-300">
            Footer

             <div className="w-1/5 h-full p-2 border-2 border-blue-300">
              Contact
            </div>
            <div className="w-1/5 p-2 h-full border-2 border-blue-300">
              Lien GitHub, Linkedin, mail
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
