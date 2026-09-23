import React, { useState, useEffect, useRef } from "react";
import SF from "../assets/photoSF.jpg";
import Animatrice from "../assets/Animation.jpg";
import Ambassadrice from "../assets/Ambassadrice.jpg";
import Menu2 from "./Menu2";
import Fleche from "./Fleche";

// 1. Création du composant d'animation (uniquement actif en disposition verticale)
const FadeInCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
    <div
      ref={domRef}
      // On remet lg:opacity-100 lg:translate-y-0 lg:transition-none pour figer les cartes sur grand écran
      className={`transition-all duration-1000 ease-out transform lg:opacity-100 lg:translate-y-0 lg:transition-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Experiences() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex">
          <div className="w-fit py-8 flex flex-col text-3xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
            Expériences Professionnelles
          </div>
          <Fleche />
        </div>

        <div className="w-full flex justify-center items-center">
          <Menu2 />
        </div>

        <div className="flex w-full lg:flex-row flex-col gap-6 md:p-10 p-3 mt-10 items-stretch">
          
          {/* Carte 1 remplacée par FadeInCard */}
          <FadeInCard className="card bg-base-100 lg:w-1/3 w-full shadow-lg overflow-hidden flex flex-col">
            <figure className="h-64 w-full shrink-0">
              <img
                src={SF}
                alt="SmartFactory"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex-1">
              <h1 className="card-title">Ingénieure en Industrie 4.0</h1>
              <h3 className="font-medium">
                Centrale Lille Institut - Villeneuve-d'Ascq
              </h3>
              <h3 className="font-medium">2024-2026 (Alternance)</h3>
              <ul className="m-4 list-disc pl-4">
                <li>Evolution d'une plateforme d'industrie 4.0</li>
                <li>Développement d'un MES</li>
                <li>
                  Accompagnement des étudiants dans des projets pour enrichir la
                  plateforme
                </li>
                <li>IOT / IIOT</li>
                <li>
                  Développement Web - Développement d'un MES (Logiciel de
                  gestion de production)
                </li>
                <li>
                  Présentation de la plateforme aux étudiants et visiteurs
                  extérieurs
                </li>
              </ul>
            </div>
          </FadeInCard>

          {/* Carte 2 remplacée par FadeInCard */}
          <FadeInCard className="card bg-base-100 lg:w-1/3 w-full shadow-lg overflow-hidden flex flex-col">
            <figure className="h-64 w-full shrink-0">
              <img
                src={Ambassadrice}
                alt="Ambassadrice"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex-1">
              <h1 className="card-title">
                Ambassadrice de la démocratie participative et de la citoyenneté
              </h1>
              <h3 className="font-medium">Mairie de Lomme</h3>
              <h3 className="font-medium">2020-2024 (Bénévolat)</h3>
              <ul className="m-4 list-disc pl-4">
                <li>
                  Organisation et participation en équipe à des projets et
                  activités citoyens
                </li>
                <li>Organisation d'une donnerie de vêtements</li>
                <li>
                  Session d'activités d'origami avec les Lommois pour un projet
                  de rideau de grues
                </li>
                <li>
                  Session d'activités pour fabriquer un arbre à voeux pour le
                  marché de Noël
                </li>
                <li>
                  Obtention de la grande médaille de l'Assemblée nationale
                </li>
              </ul>
            </div>
          </FadeInCard>

          {/* Carte 3 remplacée par FadeInCard */}
          <FadeInCard className="card bg-base-100 lg:w-1/3 w-full shadow-lg overflow-hidden flex flex-col">
            <figure className="h-64 w-full shrink-0">
              <img
                src={Animatrice}
                alt="Animatrice"
                className="w-full h-full object-cover object-[50%_30%]"
              />
            </figure>
            <div className="card-body flex-1">
              <h1 className="card-title">Animatrice en centre de loisirs</h1>
              <h3 className="font-medium">Mairie de Lomme</h3>
              <h3 className="font-medium">2021-2024 (Vacation)</h3>
              <ul className="m-4 list-disc pl-4">
                <li>Activités manuelles</li>
                <li>Activités sportives</li>
                <li>Théâtre</li>
                <li>Organisation de spectacles</li>
              </ul>
            </div>
          </FadeInCard>

        </div>
      </div>
    </>
  );
}