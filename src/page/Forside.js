// Michelle
import React from "react";
import "../styles/Forside.css";
import HeaderForside from "../components/headers/HeaderForside";
import Underskrift from "../components/Underskrift";
import HTre from "../components/HTre";
import Karussel from "../components/Karussel";
import Sortiment from "../components/Sortiment";
import Navbar from "../components/Navbar";


export default function Forside() {

  const Text = [
    "Alle pensionister og studerende får 20%",
    "på klipning og 10% på farvebehandling",
  ]; 

  return (
    <section className="Parent_container">
      <HeaderForside />
      <div>
        <Underskrift underskrift="Velkommen Freja" />
      </div>
      <div className="Favorit">
        <HTre htre="Favoritter" />
      </div>
      <div className="Favorit_container">
     
      </div>
      <div>
        <HTre htre="Tilbud og kampagner" />
      </div>
      <div className="Karussel_container">
        <Karussel />
      </div>
      <div className="text_til_tilbud">
        {Text.map((tekst, key) => (
          <p key={key}> {tekst}</p>
        ))}
      </div>
      <div className="sortiment_wrapper">
        <Sortiment />
      </div>
      <Navbar />
    </section>
  );
}; 
