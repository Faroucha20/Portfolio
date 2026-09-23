import Carte from "../assets/Carte.png";
import Neige from "../assets/Neige.png";
import Volcan from "../assets/Volcan.png";
import Foret from "../assets/Foret.png";
import Marecage from "../assets/Marecage.png";
import Desert from "../assets/Desert.png";

export default function Bomberman(){
    return(
        <> <div className="card bg-base-100 w-11/12 flex lg:flex-row flex-col shadow-lg m-3 rounded-3xl">
              <figure className="lg:w-3/5 rounded-3xl">
                <div className="carousel h-full">
                  <div id="Carte" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Carte}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Desert" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Neige" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="Neige" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Neige}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Carte" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Volcan" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="Volcan" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Volcan}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Neige" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Foret" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="Foret" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Foret}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Volcan" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Marecage" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="Marecage" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Marecage}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Foret" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Desert" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="Desert" className="carousel-item relative w-full">
                    <img
                      alt="Tailwind CSS slide example"
                      src={Desert}
                      className="w-full"
                    />
                    <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#Marecage" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#Carte" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body lg:w-2/5">
                <h1 className="card-title">Bomberman</h1>
                <h3 className="font-medium">Jeu de type Bomberman (Encore en cours de développement)</h3>
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
                    l'UI 2D à la souris ou au clavier
                  </li>
                  <li>
                    Mise en place de boosters de vitesse, de bombe, de portée
                    d'explosion
                  </li>
                  <li>6 Différents monstres avec des comportements différents</li>
                  <li>
                    Couleurs en fonction du monde (Neige, Volcan, Forêt,
                    Marécage, Désert)
                  </li>
                  <li>
                    Niveaux générés avec position aléatoire des murs destructible et des monstres à chaque commencement de niveau
                  </li>
                  <li>
                    Nombre de monstres de chaque type et nombre de murs destructible définis par défaut pour chaque niveaux
                  </li>
                  <li>
                    Images de fond générées par IA (pour la carte avec les niveau, l'image de début de jeu et de game over)
                  </li>
                </p>
              </div>
            </div></>
    )
}