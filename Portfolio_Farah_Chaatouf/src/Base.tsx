import Header from "./Composants/Header";
import Diplomes from "./Composants/Diplomes";
import Experiences from "./Composants/Experiences";
import Projets from "./Composants/Projets";
import Footer from "./Composants/Footer";
import Hero from "./Composants/Hero";
import Hero2 from "./Composants/Hero2";
import Menu1 from "./Composants/Menu1";
import Menu2 from "./Composants/Menu2";
import Menu3 from "./Composants/Menu3";

export default function Base() {
  return (
    <>
      <div className="w-full h-full bg-base-300">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Header />
          <Hero />
          <Hero2 />
          <Menu1 />
          <Menu2 />
          <Menu3 />

          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input" />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>
          <Diplomes />

          <Experiences />

          <Projets />

          <Footer />
        </div>
      </div>
    </>
  );
}
