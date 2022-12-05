// Gerda

import React from "react";

export default function Opret() {
  return (
    <div className="opret">
      <main>
        <h1>Opret</h1>
      </main>
      <div className="form-group">
        <label>Brugernavn</label>
        <input type="text" className="form-control" placeholder="Brugernavn" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="E-mail" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Kodeord" />
      </div>
      <button className="opret-btn">Opret</button>
    </div>
  );
}
