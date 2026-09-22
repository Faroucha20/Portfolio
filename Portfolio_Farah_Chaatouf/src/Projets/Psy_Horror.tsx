import videoPsyHorror from "../Documents/Video_Psy_Horror.mp4";


export default function Psy_Horror() {
  return (
    <>
      <div className="card bg-base-100 w-11/12 flex flex-row shadow-lg m-3 rounded-3xl">
        <figure className="w-3/5 rounded-3xl">
          <video
            className="w-full h-full object-cover"
            controls // Affiche les commandes (play, volume, etc.)
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
            <li>Ce jeu est un escape game en Réalité Virtuelle</li>
            <li>Ce projet est ma première experience de développement en VR</li>
            <li>Meta Quest 3</li>
            <li>Thème sombre, ambiance pesante et angoissante</li>
            <li>Unity + C#</li>
            <li>Déplacement avec les manettes VR</li>
            <li>
              Mise en place d'énigmes et d'interactions avec l'environnement
            </li>
            <li>
              Musique d'ambiance + bruitages pour certains éléments afin de
              rendre le jeu plus immersif
            </li>
          </p>
        </div>
      </div>
    </>
  );
}
