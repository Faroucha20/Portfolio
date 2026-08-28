import Header from "./Composants/Header";
import Diplomes from "./Composants/Diplomes";
import Experiences from "./Composants/Experiences";
import Projets from "./Composants/Projets";

export default function Base() {
  return (
    <>
      <div className="w-full h-full bg-base-300">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Header />
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input" />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>
          <Diplomes />

          <Experiences />

          <Projets/>

          
          <div className="w-full h-76 mt-5 flex justify-between border-4 border-fuchsia-300">
            Footer
            <div className="w-1/5 h-full p-2 border-2 border-blue-300">
              Contact
            </div>
            <div className="w-1/5 p-2 h-full border-2 border-blue-300">
              Lien GitHub, Linkedin, mail
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
