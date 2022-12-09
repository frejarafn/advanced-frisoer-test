// Freja
import React from "react";
import { useParams } from "react-router-dom";
import BehandlingList from "../components/behandlingfetch/BehandlingList";
import Header from "../components/HeaderBehandling.js";
import Navbar from "../components/Navbar";

export default function BehandlingerListe() {
  let params = useParams()
  console.log(params)
  return (
    <div>
      <Navbar />
      <main>
        <Header></Header>

        <BehandlingList id={params.ItemId}></BehandlingList>
      </main>
    </div>
  );
}
