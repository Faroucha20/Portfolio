import SF from "../assets/photoSF.jpg";

export default function Experiences() {
  return (
    <>
      <div className="card w-10/12 h-full m-5 flex bg-base-100 card-sm shadow-xl">
        <div className="card-body w-full">
          <div className="card-title">Expériences Professionnelles</div>
          <div className="flex flex-row">
            <div className="card bg-base-100 w-1/3 shadow-sm m-3">
              <figure>
                <img src={SF} alt="SmartFactory" />
              </figure>
              <div className="card-body">
                <h1 className="card-title">Ingénieure en Industrie 4.0</h1>
                <h3 className="font-medium">
                  Centrale Lille Institut - Villeneuve-d'Ascq
                </h3>
                <h3 className="font-medium">2024-2026 (Alternance)</h3>
                <p className="m-4">
                  <li>Evolution d'une platefarme d'industrie 4.0</li>
                  <li>Développement d'un MES</li>
                  <li>
                    Accompagnement des étudiants dans des projets pratiques pour
                    enrichir la plateforme
                  </li>
                </p>
              </div>
            </div>

            <div className="card bg-base-100 w-1/3 shadow-sm m-3">
              <figure>
                <img src={SF} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h1 className="card-title">
                  {" "}
                  Ambassadrice de la démocartie participative et de la citoyenneté
                </h1>
                <h3 className="font-medium">Mairie de Lomme</h3>
                <h3 className="font-medium">2020-2024 (Bénévolat)</h3>
                <p className="m-4">
                  <li>
                    Organisation et participation en équipe à des projets et activités citoyens
                  </li>
                  <li>
                    Obtention de la grande médaille de l'Assemblée nationale
                  </li>
                </p>
              </div>
            </div>

            <div className="card bg-base-100 w-1/3 shadow-sm m-3">
              <figure>
                <img src={SF} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h1 className="card-title">Animatrice en centre de loisirs</h1>
                <h3 className="font-medium">Mairie de Lomme</h3>
                <h3 className="font-medium">2020-2024 (Vacation)</h3>
                <p className="m-4">
                  <li>Activités manuelles</li>
                  <li>Théâtre</li>
                  <li>Organisation de spectacles</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
