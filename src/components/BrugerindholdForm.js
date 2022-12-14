// Nadia

import React, { useState } from 'react';
import "../styles/BrugerindholdForm.css";

export default function BrugerindholdForm() {
  // Denne useState hook bruges til at gemme værdierne fra inputfelterne

  const [username] = useState('');
  const [password, setPassword] = useState('');
  const [nytpassword, setnytPassword] = useState('');
  const [repeatpassword, setrepeatPassword] = useState('');

  // Den her funktion vil blive kaldt når knappen trykkes
  const handleLogin = () => {
    window.alert('Denne ændring er bekræftet');
  };

  return (
    <form>
      {/*Form indholdsbokse*/}

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="text"
            value={username}
            className="input-indhold"
            id="inputnr2"
            placeholder="Brugernavn"
          />
        </div>
      </div>

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-indhold"
            id="inputnr2"
            placeholder=" Nuværende kodeord"
          />
        </div>
      </div>

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="password"
            value={nytpassword}
            onChange={(e) => setnytPassword(e.target.value)}
            className="input-indhold"
            id="inputnr2"
            placeholder="Ny kodeord"
          />
        </div>
      </div>

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="password"
            value={repeatpassword}
            onChange={(e) => setrepeatPassword(e.target.value)}
            className="input-indhold"
            id="inputnr2"
            placeholder="Gentag kodeord"
          />
        </div>
      </div>

      {/*skift knap*/}
      <input type="submit" value="Skift" className="SubmitKnapIndstillinger"
        onClick={handleLogin} />
    </form>
  );
}
