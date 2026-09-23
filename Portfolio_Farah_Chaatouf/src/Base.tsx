import Footer from "./Composants/Footer";
import Hero2 from "./Composants/Hero2";
import Menu2 from "./Composants/Menu2";

import CV from "./Documents/CV_2026.pdf";

export default function Base() {
  return (
    <>
      <div className="w-10 h-10 3xl:bg-violet-700 2xl:bg-red-700 xl:bg-red-300 lg:bg-amber-500 md:bg-yellow-300 sm:bg-green-300 bg-blue-300">
        test
      </div>
      <div className="w-full lg:h-full md:h-screen bg-base-300">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className="lg:h-screen h-3/6 w-full flex justify-center items-center">
            <Hero2 />
          </div>

          <div className="max-lg:1/6">
            <a
              href={CV}
              download="CV_Farah_CHAATOUF.pdf"
              className="btn btn-outline border-blue-800 text-blue-800 hover:bg-linear-to-r hover:from-blue-800 hover:to-fuchsia-500 hover:text-white gap-2 lg:my-15"
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
          <div className="lg:mb-20 w-full lg:h-fit h-1/6 flex justify-center items-center">
            <Menu2 />
          </div>
          <div className="max-lg:h-1/6 w-full flexjustify-start items-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
