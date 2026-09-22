import Fleche from "./Fleche";
import Menu2 from "./Menu2";

export default function Competences() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className="flex">
          <div className="w-fit py-8 flex text-3xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
            Compétences
          </div>
          <Fleche />
        </div>
        <div className="w-full flex justify-center items-center">
          <Menu2 />
        </div>
        <div className="flex w-11/12 items-start justify-center space-x-10 mt-20">
          <div className="w-1/4 rounded-xl shadow-2xl p-5 flex flex-col justify-center items-center">
            <div className="w-fit mb-5 flex text-xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Langues
            </div>
            <div className="w-full px-5">
              <li>Français (Maternel)</li>
              <li>Anglais (A2)</li>
              <li>Espagnol (A2)</li>
            </div>
          </div>
          <div className="w-2/3 rounded-xl shadow-2xl p-5 flex flex-col justify-center items-center">
            <div className="w-fit mb-5 flex text-xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Codage
            </div>
            <div className="flex w-full justify-between">
              <div>
                <div>Java Script</div>
                <div>React</div>
                <div>TypeScript</div>
                <div>Tailwind</div>
                <div>DaisyUI</div>
                <div>NodeJS</div>

              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                <div>Unity</div>
                <div>C#</div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                <div>CSS</div>
                <div>HTML</div>
                <div>SQL</div>
              </div>

              <div className="divider divider-horizontal"></div>
              <div>
                <div>Bash</div>
                <div>Express JS</div>
                <div>Python</div>
                <div>C</div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                <div>Docker</div>
                <div>Docker-compose</div>
                <div>Swagger</div>
              </div>
            </div>
          </div>
          <div className="w-1/4 rounded-xl shadow-2xl p-5 flex flex-col justify-center items-center">
            <div className="w-fit mb-5 flex text-xl justify-center items-center text-center font-semibold font-serif bg-linear-to-r from-blue-800 to-fuchsia-400 bg-clip-text text-transparent box-decoration-clone">
              Soft Skills
            </div>
            <div className="w-full px-5">
              <li>À l'écoute</li>
              <li>Esprit d'équipe</li>
              <li>Pédagogue</li>
              <li>Autonomie</li>
              <li>Pédagogue</li>
              <li>Sens des responsabilités</li>
              <li>Bonne capacité d'adapation</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
