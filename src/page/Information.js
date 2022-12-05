// Freja

import React from "react";
import "../styles/Information.css";

import Header from "../components/Header";
import { NavLink } from "react-router-dom";

export default function Information() {
  return (
    <section>
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
