// Michelle
import React from "react";
import "../styles/Forside.css";
import HeaderForside from "../components/headers/HeaderForside";
import Underskrift from "../components/Underskrift";
import HTre from "../components/HTre";
import Karussel from "../components/Karussel";
import Sortiment from "../components/Sortiment";
import Navbar from "../components/Navbar";
import Favoritter from "../components/Favoritter";


export default function Forside() {

  const Text = [
    "Alle pensionister og studerende får 20%",
    "på klipning og 10% på farvebehandling",
  ]; 


  return (
    // parent container
    <section className="Parent_container">
      {/* header */}
      <HeaderForside />

      <div className="headline">
        <h1>Velkommen til</h1>
        <Underskrift underskrift="Golden Hair Studio" />
      </div> 

      {/* overskrift */}
      <div className="Favorit">
        <HTre htre=" Dine favoritter" />
      </div>

      {/* children container med favorit component */}
      <div className="Favorit_container">
        <Favoritter/>
      </div> 

      {/* overskrift */}
      <div>
        <HTre htre="Tilbud og kampagner" />
      </div>

      {/* children container med karussel component */}
      <div className="Karussel_container">
        <Karussel />
      </div>

      {/* tekst */}
      <div className="text_til_tilbud">
        {Text.map((tekst, key) => (
          <p key={key}> {tekst}</p>
        ))}
      </div>

      {/* children container med sortiment component */}
      <div className="sortiment_wrapper">
        <Sortiment />
      </div>
      <Navbar />
    </section>
  );
}; 
