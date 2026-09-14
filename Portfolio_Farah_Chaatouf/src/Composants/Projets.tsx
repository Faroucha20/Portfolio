import Taxi1 from "../assets/Taxi1.png";
import Taxi2 from "../assets/Taxi2.png";
import Taxi3 from "../assets/Taxi3.png";
import Assemblage from "../assets/Assemblage.png";
import Commande from "../assets/Commande.png";
import Administration from "../assets/Administration.png";
import videoPsyHorror from "../Documents/Video_Psy_Horror.mp4";
import Dashboard from "../assets/Dashboard.png";
import Tracabilite from "../assets/Tracabilite.png";
import Preparation from "../assets/Preparation.png";

export default function Projets() {
  return (
    <>
      <div className="card w-10/12 h-full m-5 flex bg-base-100 card-sm shadow-xl">
        <div className="card-body w-full">
          <div className="card-title">Projets</div>
          <div className="flex flex-col justify-center items-center">
            <div className="card bg-base-100 w-11/12 flex flex-row shadow-sm m-3 shadow-fuchsia-200">
              <figure className="w-3/5 rounded-lg">
                <video
                    className="w-full h-full object-cover"
                    controls       // Affiche les commandes (play, volume, etc.)
                    playsInline
                >
                    <source src={videoPsyHorror} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </figure>
              <div className="card-body w-2/5">
                <h1 className="card-title">Psy Horror</h1>
                <h3 className="font-medium">Escape Game en VR</h3>
                <p className="m-4">
                  <li>Ce jeu est un escape game en réalité virtuelle</li>
                  <li>Meta Quest 3</li>
                  <li>Thème sombre, ambiance pesante et angoissante</li>
                  <li>Unity + C#</li>
                  <li>Déplacement avec les manettes VR</li>
                  <li>
                    Mise en place d'énigmes et d'interactions avec
                    l'environnement
                  </li>
                  <li>
                    Musique d'ambiance + bruitages pour certains éléments afin de
                    rendre le jeu plus immersif
                  </li>
                </p>
              </div>
            </div>

            <div className="card bg-base-100 w-11/12 flex flex-row shadow-sm m-3 shadow-fuchsia-200">
              <figure className="w-3/5 rounded-lg">
                <div className="carousel h-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi1}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi2}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi3}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>

              <div className="card-body w-2/5">
                <h1 className="card-title">My Taxi</h1>
                <h3 className="font-medium">Jeu 2D d'optimisation d'IA</h3>
                <p className="m-4">
                  <li>
                    Jeu qui permet de transporter des passagers de manière
                    optimale en réglant les paramètres de l'IA
                  </li>
                  <li>PC</li>
                  <li>Thème rétro</li>
                  <li>Unity + C#</li>
                  <li>
                    Sur ce jeu je me suis principalement occupée de la
                    programmation de l'interface et de la liaison avec l'IA
                  </li>
                  <li>
                    Mise en place d'un menu, d'un dashbord et d'une page de
                    résultats
                  </li>
                  <li>
                    Déplacement de la voiture d'après le circuit calculé par
                    l'IA pour 5 essais au hasard
                  </li>
                </p>
              </div>
            </div>

            <div className="card bg-base-100 w-11/12 flex flex-row shadow-sm m-3 shadow-fuchsia-200">
              <figure className="w-3/5 rounded-lg">
                <div className="carousel h-full">
                  <div id="slide1.1" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi1}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3.1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2.1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2.1" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi2}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1.1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3.1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3.1" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Taxi3}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2.1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1.1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body w-2/5">
                <h1 className="card-title">Bomberman</h1>
                <h3 className="font-medium">Jeu de type Bomberman</h3>
                <p className="m-4">
                  <li>
                    Ce jeu est une sorte de Bomberman, le but est de tuer tous
                    les monstres de chaque niveau
                  </li>
                  <li>PC</li>
                  <li>Assets 3D avec un gameplay en 2D</li>
                  <li>Unity + C#</li>
                  <li>
                    Déplacement dans la vue 3D avec clavier et sélection dans
                    l'UI 2D à la souris
                  </li>
                  <li>
                    Mise en place de boosters de vitesse, de bombe, de portée
                    d'explosion
                  </li>
                  <li>Différents monstres avec des comportements différents</li>
                  <li>
                    Couleurs en fonction du monde (Neige, Volcan, Forêt,
                    Marécage, Désert)
                  </li>
                </p>
              </div>
            </div>

            <div className="card bg-base-100 w-11/12 flex flex-row shadow-sm m-3 shadow-fuchsia-200">
             <figure className="w-3/5 rounded-lg">
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
                    Ce logiciel est une solution de gestion de ligne de
                    production
                  </li>
                  <li>Interface utilisateur intuitive</li>
                  <li>
                    React, tailwind, daisyui, Express JS, Mysql, Swagger, Docker
                  </li>
                  <li>Gestion des données en temps réel</li>
                  <li>
                    Système d'authentification par mot de passe et de gestion
                    des utilisateurs
                  </li>
                  <li>
                    Pages pour opérateurs, superviseurs et administrateurs avec
                    des fonctionnalités adaptées à chaque rôle
                  </li>
                  <li>
                    Mode claire et mode sombre celon les préférences de l'utilisateur
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
