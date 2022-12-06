// Gerda
import "../styles/Login.css";
import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password);

    navigate("/");
  };
  return (
    <div className="login">
      <h1>Login</h1>
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
      <button className="opret-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
