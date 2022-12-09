// Gerda

import React from "react";
import Header from "../components/HeaderAabningstider.js";
import Navbar from "../components/Navbar";
import "../styles/Aabningstider.css";

export default function Aabningstider() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <Header />
      </div>

      <div className="aabningstider">
        <div className="Dage">
          <p>Mandag </p>
          <p>Tirsdag </p>
          <p>Tirsdag </p>
          <p>Onsdag </p>
          <p>Torsdag </p>
          <p>Fredag </p>
          <p>Lørdag </p>
          <p>Søndag </p>
        </div>
        <div className="Tidspunkter-lige">
          <p>09:00 - 17:00</p>
          <p>Lukket </p>
          <p>Tirsdag </p>
          <p>09:00 - 17:00 </p>
          <p>09:00 - 17:00</p>
          <p>09:00 - 17:00 </p>
          <p>09:00 - 14:00 </p>
          <p>Lukket </p>
        </div>
      </div>
    </div>
  );
}
