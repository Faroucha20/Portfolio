import Header from "./Composants/Header";
import Diplomes from "./Composants/Diplomes";
import Experiences from "./Composants/Experiences";
import Projets from "./Composants/Projets";
import Footer from "./Composants/Footer";

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

          <Footer />
        </div>
      </div>
    </>
  );
}
