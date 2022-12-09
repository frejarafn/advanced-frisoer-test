// Freja

import React from "react";
import "../styles/Information.css";

import Header from "../components/HeaderInformation";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Information() {
  return (
    <section>
      <Navbar />
      <Header></Header>

      <div className="infokategori">
        <NavLink className="infolink" to="/Kontakt">
          <p>Kontakt</p>
        </NavLink>
      </div>

      <div className="infokategori">
        <NavLink className="infolink" to="/Aabningstider">
          <p>Åbningstider</p>
        </NavLink>
      </div>

      <div className="infokategori">
        <NavLink className="infolink" to="/Produkter">
          <p>Produkter</p>
        </NavLink>
      </div>

      <div className="infokategori">
        <NavLink className="infolink" to="/OmSalonen">
          <p>Om Salonen</p>
        </NavLink>
      </div>
    </section>
  );
}
