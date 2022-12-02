import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Forside from "./page/Forside";
import Behandlinger from "./page/Behandlinger";

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
      </Routes>
    </>
  );
}

export default App;
