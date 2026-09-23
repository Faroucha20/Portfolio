import CarteElectronique from "../assets/Carte_Electronique.png"
import Etapes from "../assets/Etapes.png"
import Site from "../assets/Site.png"
import Schema from "../assets/Schema.png"
import Dessin from "../assets/Dessin.png"
import PCB from "../assets/PCB.png"

export default function BTS() {
  return (
    <>
      <div className="card bg-base-100 w-11/12 flex lg:flex-row flex-col shadow-lg m-3 rounded-3xl overflow-hidden">
        <figure className="lg:w-3/5 w-full bg-base-100">
          <div className="carousel h-full w-full">
            
            <div id="Dessin" className="carousel-item relative w-full">
              <img
                alt="Dessin du projet"
                src={Dessin}
                // Ajout de h-full et object-contain ici
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#Site" className="btn btn-circle">❮</a>
                <a href="#Schema" className="btn btn-circle">❯</a>
              </div>
            </div>
            
            <div id="Schema" className="carousel-item relative w-full">
              <img
                alt="Schéma structurel"
                src={Schema}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#Dessin" className="btn btn-circle">❮</a>
                <a href="#PCB" className="btn btn-circle">❯</a>
              </div>
            </div>
            
            <div id="PCB" className="carousel-item relative w-full">
              <img
                alt="Rendu PCB"
                src={PCB}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#Schema" className="btn btn-circle">❮</a>
                <a href="#Etapes" className="btn btn-circle">❯</a>
              </div>
            </div>
            
            <div id="Etapes" className="carousel-item relative w-full">
              <img
                alt="Etapes de fabrication"
                src={Etapes}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#PCB" className="btn btn-circle">❮</a>
                <a href="#CarteElectronique" className="btn btn-circle">❯</a>
              </div>
            </div>
            
            <div id="CarteElectronique" className="carousel-item relative w-full">
              <img
                alt="Carte Électronique finale"
                src={CarteElectronique}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#Etapes" className="btn btn-circle">❮</a>
                <a href="#Site" className="btn btn-circle">❯</a>
              </div>
            </div>
            
            <div id="Site" className="carousel-item relative w-full">
              <img
                alt="Interface Web"
                src={Site}
                className="w-full h-full object-contain"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#CarteElectronique" className="btn btn-circle">❮</a>
                <a href="#Dessin" className="btn btn-circle">❯</a>
              </div>
            </div>
            
          </div>
        </figure>

        <div className="card-body lg:w-2/5 w-full">
          <h1 className="card-title">Qualité de l'eau</h1>
          <h3 className="font-medium">
            Système de surveillance de la qualité de l'eau (Projet scolaire de fin de BTS)
          </h3>
          
          {/* Correction : utilisation de <ul> au lieu de <p> */}
          <ul className="m-4 list-disc pl-4 space-y-2">
            <li>Python, C, CSS, HTML, JavaScript</li>
            <li>Raspberry Pi</li>
            <li>
              Création de carte électronique (Schéma structurel, PCB, Soudure)
            </li>
            <li>Communication avec les autres cartes</li>
            <li>Programmation de carte électronique</li>
            <li>Programmation Web (Interface utilisateur)</li>
            <li>Tests de fonctionnement</li>
          </ul>
        </div>
      </div>
    </>
  );
}