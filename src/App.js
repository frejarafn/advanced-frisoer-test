import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Forside from "./page/Forside";
import Behandlinger from "./page/Behandlinger";
import Produkter from "./page/Produkter";
import Booking from "./page/Booking";
import Indstillinger from "./page/Indstillinger";
import Information from "./page/Information";
import Kontakt from "./page/Kontakt";
import Login from "./page/Login";
import OmSalonen from "./page/OmSalonen";
import Opret from "./page/Opret";
import Profil from "./page/Profil";
import Aabningstider from "./page/Aabningstider";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Forside" element={<Forside />} />
        <Route path="/Behandlinger" element={<Behandlinger />} />
        <Route path="/Produkter" element={<Produkter />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Indstillinger" element={<Indstillinger />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OmSalonen" element={<OmSalonen />} />
        <Route path="/Opret" element={<Opret />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Aabningstider" element={<Aabningstider />} />
      </Routes>
    </>
  );
}

export default App;
