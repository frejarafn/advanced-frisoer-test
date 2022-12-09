// Freja
import React from "react";
import BehandlingSection from "../components/behandlingfetch/BehandlingSection";
import Navbar from "../components/Navbar";

export default function Behandlinger() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Behandlinger</h1>
        <BehandlingSection></BehandlingSection>
      </main>
    </div>
  );
}
