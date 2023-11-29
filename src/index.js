import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apropos from "./a-propos";
import Contact from "./contact";
import Experiences from "./experiences";
import { Maintenance } from "./maintenance";
import "../src/styles/global.css";
import Projet from "./projet.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* mise en place du router */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/projet" element={<Projet />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
