import Dinamyque from "./Dinamyque";

export default function Diplomes() {
  return (
    <>
      <div className="w-full h-full m-5 flex">
        <div className="w-1/2 flex flex-col">
          <div className="p-4 ">
            <div className="flex">
              <div className="font-medium text-black w-24">2023-2026 :</div>
              <div className="font-medium text-black">
                Master Scientifique Professionnel en Informatique
              </div>
            </div>
            <div className="font-light text-black ml-24">
              Ecole d'informatique Epitech - Lille
            </div>
            <div className="font-light text-black ml-24">
              Spécialité Mondes Immersifs (VR/AR/MR) et IOT + option IA
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-24">2021-2023 :</div>
              <div className="font-medium text-black">
               BTS Système Numérique option Electronique et Communication
              </div>
            </div>
            <div className="font-light text-black ml-24">
              Lycée Gustave Eiffel - Armentières
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-24">2018-2021 :</div>
              <div className="font-medium text-black">
                BAC Général
              </div>
            </div>
            <div className="font-light text-black ml-24">
              Lycée Jean Perrin - Lambersart
            </div>
            <div className="font-light text-black ml-24">
              Spécialité Maths, Numérique et Science Informatique + option Maths Expertes
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="font-medium text-black w-24">2018 :</div>
              <div className="font-medium text-black">
                Obtention du diplôme des Premiers Secours Citoyens
              </div>
            </div>
            <div className="font-light text-black ml-24">
              Collège Jean Jaurès - Lomme
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2">
          <Dinamyque />
        </div>
      </div>
    </>
  );
}
