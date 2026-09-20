import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Base from "./Base";
import Projets from "./Composants/Projets";
import Diplomes from "./Composants/Diplomes";
import Experiences from "./Composants/Experiences";

createRoot(document.getElementById("root")!).render(
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/diplomes" element={<Diplomes />} />
      <Route path="/experiences" element={<Experiences />} />



    </Routes>
  </Router>
  </>,
);
