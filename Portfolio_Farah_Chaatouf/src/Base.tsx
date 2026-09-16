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
import Menu4 from "./Composants/Menu4";

import CV from "./Documents/CV_Farah.pdf";

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
          <Menu4 />


          <div>
            <a
              href={CV}
              download="CV_Farah_CHAATOUF.pdf"
              className="btn btn-outline border-blue-800 text-blue-800 hover:bg-gradient-to-r hover:from-blue-800 hover:to-fuchsia-500 hover:text-white gap-2"
            >
              {/* Icône de téléchargement (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Télécharger mon CV
            </a>
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
