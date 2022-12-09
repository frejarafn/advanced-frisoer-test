// Gerda
import "../styles/Opret.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useState } from "react";
import { Tilbageknap } from "../components/Tilbageknap";
import wave from "./wave3.svg";

export default function Opret() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, { displayName: name });
    navigate("/");
  };
  return (
    <div className="opret-main">
      <h2> Golden Hairstudio</h2>
      <img className="wave" src={wave} alt="" />
      <div className="tilbage">
        <Tilbageknap></Tilbageknap>
      </div>
      <div className="opret">
        <h3>Opret din profil</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Brugernavn"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Kodeord"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="opret-btn" onClick={handleSignup}>
          Opret
        </button>
      </div>
    </div>
  );
}
