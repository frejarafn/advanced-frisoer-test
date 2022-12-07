// Gerda
import "../styles/Login.css";
import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import wave from "./wave3.svg";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password);

    navigate("/");
  };
  return (
    <div className="login-main">
      <h1> Golden Hairstudio</h1>
      <img className="wave" src={wave} alt="" />
      <div className="login">
        <h2>Login</h2>
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
      </div>

      <div className="opretdig">
        <div className="opretdig-btn" to="/Opret">
          <NavLink to="/Opret">Opret dig</NavLink>
        </div>
        <div className="glemtkodeord-btn" to="/Opret">
          <NavLink to="#">Glemt kodeord</NavLink>
        </div>
      </div>
      <div className="loginflex">
        <button className="login-btn" onClick={handleLogin}>
          Log ind
        </button>
      </div>
    </div>
  );
}
