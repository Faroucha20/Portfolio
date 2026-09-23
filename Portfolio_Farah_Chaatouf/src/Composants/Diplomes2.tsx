import React, { useState, useEffect, useRef } from "react";
import Menu2 from "./Menu2";
import Fleche from "./Fleche";

// Composant qui remplace la balise <li> classique
const AnimatedTimelineItem = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } 
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <li
      ref={domRef}
      // On a supprimé les classes lg:... ici pour que l'animation s'applique partout
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </li>
  );
};

export default function Diplomes2() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center pb-10">
        <div className="flex">
          <Fleche />
          <div className="w-fit py-8 flex text-3xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
            Diplômes et Formations
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <Menu2 />
        </div>
        
        <div className="w-11/12 shadow-xl rounded-3xl mt-20">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-hidden">
            
            <AnimatedTimelineItem>
              <div className="timeline-middle transform hover:-translate-y-1 hover:scale-110">
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
            </AnimatedTimelineItem>

            <AnimatedTimelineItem>
              <hr />
              <div className="timeline-middle hover:-translate-y-1 hover:scale-110">
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
                  Spécialité Maths, Numérique et Science Informatique + option
                  Maths Expertes
                </div>
              </div>
              <hr />
            </AnimatedTimelineItem>

            <AnimatedTimelineItem>
              <hr />
              <div className="timeline-middle hover:-translate-y-1 hover:scale-110">
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
            </AnimatedTimelineItem>

            <AnimatedTimelineItem>
              <hr />
              <div className="timeline-middle hover:-translate-y-1 hover:scale-110">
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
            </AnimatedTimelineItem>

            <AnimatedTimelineItem>
              <hr />
              <div className="timeline-middle hover:-translate-y-1 hover:scale-110">
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
            </AnimatedTimelineItem>

          </ul>
        </div>
      </div>
    </>
  );
}