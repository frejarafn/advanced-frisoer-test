// Gerda
import "../styles/Login.css";
import React from "react";
import { useState } from "react";
// Importere metoden til at logge ind med email og password i firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import wave from "./wave3.svg";

// Her bruges funktionen til at logge ind
export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password);
    // Navigate fører til forsiden når man har logget ind
    navigate("/");
  };
  return (
    <div className="login-main">
       <div className="ghs-flex">
      <h2> Golden Hairstudio</h2>
      </div>
      <img className="wave" src={wave} alt="" />
      <div className="login">
        <h3>Login</h3>
        <div className="form-group">
          {/*Input form for at skrive email*/}
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
          {/*Input form for at skrive kodeord*/}
          <input
            type="password"
            className="form-control"
            placeholder="Kodeord"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="opretdig">
        {/*Knap for at oprette en bruger*/}
        <div className="opretdig-btn" to="/Opret">
          <NavLink to="/Opret">Opret dig</NavLink>
        </div>
        {/*Knap for at skifte kodeord*/}
        <div className="glemtkodeord-btn" to="/Opret">
          <NavLink to="#">Glemt kodeord</NavLink>
        </div>
      </div>
      <div className="loginflex">
        {/*onClick kalder på fuktionen som logger brugere ind med 
        den samme email og password som de har indtastet da de har oprettet en bruger*/}
        <button className="login-btn" onClick={handleLogin}>
          Log ind
        </button>
      </div>
    </div>
  );
}
