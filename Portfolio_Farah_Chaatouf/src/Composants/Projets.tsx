import React, { useState, useEffect, useRef } from "react";
import Menu2 from "./Menu2";
import Fleche from "./Fleche";
import Psy_Horror from "../Projets/Psy_Horror";
import My_Taxi from "../Projets/My_Taxi";
import Bomberman from "../Projets/Bomberman";
import PrismMES from "../Projets/PrismMES";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la carte entre dans le champ de vision
          if (entry.isIntersecting) {
            setVisible(true);
            // On arrête d'observer pour que l'animation ne se rejoue pas à chaque scroll
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }, // Se déclenche quand 15% de la carte est visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`w-full flex justify-center transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      }`}
    >
      {children}
    </div>
  );
};

export default function Projets() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex">
          <div className="w-fit py-8 flex text-3xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
            Projets
          </div>
          <Fleche />
        </div>

        <div className="w-full flex justify-center items-center">
          <Menu2 />
        </div>

        <div className="flex flex-col justify-center items-center gap-10 pb-10 mt-20">
          <FadeInSection>
            <Psy_Horror />
          </FadeInSection>

          <FadeInSection>
            <My_Taxi />
          </FadeInSection>

          <FadeInSection>
            <Bomberman />
          </FadeInSection>

          <FadeInSection>
            <PrismMES />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
