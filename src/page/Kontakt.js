//Michelle & Freja

import React from "react";
import Underskrift from "../components/Underskrift";
import Header from "../components/headers/HeaderKontakt";
import "../styles/Kontakt.css";
import KontaktForm from "../components/KontaktForm";
import Navbar from "../components/Navbar";

export default function kontakt() {
  const Text = [
    "Er du interesseret eller har et spørgsmål",
    "så kontakt mig gerne:",
  ];

  const Info = ["Mobil: 51303057", "Email: golden-hairstudio@hotmail.com", "CVR: 43116266"];

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
          {Text.map((tekst, key) => (
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
        <div>
          <p className="fangsocials">
            Eller fang mig på de sociale medier her:
          </p>
          <br></br>

        </div>
        <div className="socialsflex">

          <a href="https://www.facebook.com/profile.php?id=100076355199195">

            <img className="socials" src="/images/Face.jpg" alt="Facebook"></img>
          </a>

          <a href="https://www.instagram.com/hairstudio.golden/">
            <img className="socials" src="/images/Insta.jpg" alt="Instagram"></img>

          </a>


        </div>
      </section>
    </>
  );
}; 
