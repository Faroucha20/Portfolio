export default function Diplomes() {
  return (
    <>
      <div className="card w-10/12 h-full m-5 flex bg-base-100 card-sm shadow-xl">
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




      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-blue-800"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">
              Obtention du diplôme des Premiers Secours Citoyens
            </div>
            Collège Jean Jaurès - Lomme
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-fuchsia-900"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black">BAC Général</div>
            <div>Lycée Jean Perrin - Lambersart</div>
            <div>
              Spécialité Maths, Numérique et Science Informatique + option Maths
              Expertes
            </div>
          </div>

          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-fuchsia-800"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">BAFA Complet</div>
            CEMEA - Lille
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-fuchsia-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">
              BTS Système Numérique option Electronique et Communication
            </div>
            Lycée Gustave Eiffel - Armentières
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-fuchsia-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:mb-10 md:text-end">
            <time className="font-mono italic">2026</time>
            <div className="text-lg font-black">
              Master Scientifique Professionnel en Informatique
            </div>
            <div>Ecole d'informatique Epitech - Lille</div>
            <div>
              Spécialité Mondes Immersifs (Réalité Virtuelle/Réalité
              Augmentée/Réalité Mixte) et IOT
            </div>
            <div>+ option Intelligence Artificielle</div>
          </div>
        </li>
      </ul>

<div className="w-full h-96"></div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <div className="text-lg w-fit font-black bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Obtention du diplôme des Premiers Secours Citoyens
            </div>
            Collège Jean Jaurès - Lomme
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg w-fit font-black bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">BAC Général</div>
            <div>Lycée Jean Perrin - Lambersart</div>
            <div>
              Spécialité Maths, Numérique et Science Informatique + option Maths
              Expertes
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg w-fit font-black bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">BAFA Complet</div>
            CEMEA - Lille
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg w-fit font-black bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              BTS Système Numérique option Electronique et Communication
            </div>
            Lycée Gustave Eiffel - Armentières
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start flex flex-col items-end mb-10 md:mb-10 md:text-end">
            <time className="font-mono italic">2026</time>
            <div className="text-lg w-fit font-black bg-gradient-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent decoration-clone">
              Master Scientifique Professionnel en Informatique
            </div>
            <div>Ecole d'informatique Epitech - Lille</div>
            <div>
              Spécialité Mondes Immersifs (Réalité Virtuelle/Réalité
              Augmentée/Réalité Mixte) et IOT
            </div>
            <div>+ option Intelligence Artificielle</div>
          </div>
        </li>
      </ul>
    </>
  );
}
