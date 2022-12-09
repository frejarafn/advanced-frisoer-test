//Michelle

import React from "react";
import Overskrift from "../components/Overskrift";
import Header from "../components/HeaderKontakt";
import "../styles/Kontakt.css";
import Navbar from "../components/Navbar";

export default function kontakt() {
  const Text = [
    "Er du interesseret eller har et spørgsmål",
    "så kontakt mig gerne",
  ];

  const Info = ["Mobil: 51303057", "Email: golden-hairstudio@hotmail.com"];

  return (
    <>
      <Navbar />
      <section>
        <Header />
        <div className="os">
          <div className="img"></div>
          <Overskrift overskrift="Kontakt salonen" />
        </div>
        <div className="tekst">
          {Text.map((tekst) => (
            <p>{tekst}</p>
          ))}
        </div>
        <div className="tekst2">
          {Info.map((Information) => (
            <p>{Information}</p>
          ))}
        </div>

        <div className="formular"></div>
      </section>
    </>
  );
}
