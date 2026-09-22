import Taxi1 from "../assets/Taxi1.png";
import Taxi2 from "../assets/Taxi2.png";
import Taxi3 from "../assets/Taxi3.png";

export default function My_Taxi() {
  return (
    <>
      <div className="card bg-base-100 w-11/12 flex flex-row shadow-lg m-3 rounded-3xl">
        <figure className="w-3/5 rounded-3xl">
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
              Jeu qui permet de transporter des passagers de manière optimale en
              réglant les paramètres de l'IA
            </li>
            <li>PC</li>
            <li>Thème rétro</li>
            <li>Unity + C#</li>
            <li>
              Sur ce jeu je me suis principalement occupée de la programmation
              de l'interface et de la liaison avec l'IA
            </li>
            <li>
              Mise en place d'un menu, d'un dashbord et d'une page de résultats
            </li>
            <li>
              Déplacement de la voiture d'après le circuit calculé par l'IA pour
              5 essais au hasard
            </li>
          </p>
        </div>
      </div>
    </>
  );
}
