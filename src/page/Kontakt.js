//Michelle

import React from "react";
import Underskrift from "../components/Underskrift";
import Header from "../components/headers/HeaderKontakt";
import "../styles/Kontakt.css";
import KontaktForm from "../components/KontaktForm";
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
          <div className="img">
            <img
              className="portraet"
              src="/images/KigInd2.jpg"
              alt="Salonen udefra"
            ></img>
          </div>
          <Underskrift underskrift="Kontakt salonen" />
        </div>
        <div className="tekst">
          {Text.map ((tekst, key) => (
            <p key={key}>{tekst}</p>
          ))}
        </div>
        <div className="tekst2">
          {Info.map((Information, key) => (
            <p key={key}>{Information}</p>
          ))}
        </div>

        <div className="formular">
          <KontaktForm />
        </div>
      </section>
    </>
  );
}; 
