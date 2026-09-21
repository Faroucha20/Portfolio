export default function Diplomes() {
  return (
    <>
      <div className=" w-10/12 h-full m-5 flex bg-base-100 card-sm shadow-xl">
        <div className="card-body w-full flex flex-col">
          <div className="card-title">Diplômes et Etudes</div>
          <div className="p-4 ">
            <div className="flex">
              <div className="font-medium text-black w-26">2023-2026 :</div>
              <div className="font-medium text-black">
                Master Scientifique Professionnel en Informatique
              </div>
            </div>
            <div className="font-light text-black ml-26">
              Ecole d'informatique Epitech - Lille
            </div>
            <div className="font-light text-black ml-26">
              Spécialité Mondes Immersifs (VR/AR/MR) et IOT + option IA
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-26">2021-2023 :</div>
              <div className="font-medium text-black">
                BTS Système Numérique option Electronique et Communication
              </div>
            </div>
            <div className="font-light text-black ml-26">
              Lycée Gustave Eiffel - Armentières
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-26">2018-2021 :</div>
              <div className="font-medium text-black">BAC Général</div>
            </div>
            <div className="font-light text-black ml-26">
              Lycée Jean Perrin - Lambersart
            </div>
            <div className="font-light text-black ml-26">
              Spécialité Maths, Numérique et Science Informatique + option Maths
              Expertes
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-26">2018 :</div>
              <div className="font-medium text-black">
                Obtention du diplôme des Premiers Secours Citoyens
              </div>
            </div>
            <div className="font-light text-black ml-26">
              Collège Jean Jaurès - Lomme
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
