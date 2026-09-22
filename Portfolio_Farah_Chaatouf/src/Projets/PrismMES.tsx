import Assemblage from "../assets/Assemblage.png";
import Commande from "../assets/Commande.png";
import Administration from "../assets/Administration.png";
import Dashboard from "../assets/Dashboard.png";
import Tracabilite from "../assets/Tracabilite.png";
import Preparation from "../assets/Preparation.png";

export default function PrismMES() {
  return (
    <>
      <div className="card bg-base-100 w-11/12 flex flex-row shadow-lg m-3 rounded-3xl">
        <figure className="w-3/5 rounded-3xl">
          <div className="carousel h-full">
            <div id="slide1.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Commande}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide6.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Preparation}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Assemblage}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Administration}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Dashboard}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6.2" className="carousel-item relative w-full">
              <img
                alt="Tailwind CSS slide example"
                src={Tracabilite}
                className="w-full"
              />
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5.2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1.2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body w-2/5">
          <h1 className="card-title">PrismMES</h1>
          <h3 className="font-medium">
            Logiciel de gestion de ligne de production (MES)
          </h3>
          <p className="m-4">
            <li>
              Ce logiciel est une solution de gestion de ligne de production
            </li>
            <li>Interface utilisateur intuitive</li>
            <li>
              React, Tailwind, Daisyui, Express JS, Mysql, Swagger, Docker
            </li>
            <li>
              Responsive
            </li>
            <li>Gestion des données en temps réel</li>
            <li>
              Système d'authentification par mot de passe + gestion des
              utilisateurs
            </li>
            <li>
              Pages pour opérateurs, superviseurs et administrateurs avec des
              fonctionnalités adaptées à chaque rôle
            </li>
            <li>
              Visualisation du rendu final pour chaque opération
            </li>
            <li>
              Mode claire et mode sombre celon les préférences de l'utilisateur
            </li>
          </p>
        </div>
      </div>
    </>
  );
}
