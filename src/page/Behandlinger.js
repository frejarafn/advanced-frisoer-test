// Freja
import React from "react";
import BehandlingSection from "../components/behandlingfetch/BehandlingSection";
import Header from "../components//headers/HeaderBehandling.js";
import Navbar from "../components/Navbar";
import "../styles/Behandlinger.css";


export default function Behandlinger() {
  return (
    <div>
      <Navbar />
      <main>
        <Header></Header>

        <BehandlingSection></BehandlingSection>
        <img className="image" src="/images/spa2.jpg" alt="Fejl 404"></img>

      </main>
    </div>
  );
}
