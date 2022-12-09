// Freja
import React from "react";
import BehandlingSection from "../components/behandlingfetch/BehandlingSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Behandlinger() {
  return (
    <div>
      <Navbar />
      <main>
        <Header></Header>

        <BehandlingSection></BehandlingSection>
      </main>
    </div>
  );
}
