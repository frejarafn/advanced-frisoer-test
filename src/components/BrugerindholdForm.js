import React, { useState } from 'react';
import "../styles/BrugerindholdForm.css";

export default function BrugerindholdForm() {
  // Denne useState hook bruges til at gemme værdierne fra inputfelterne

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setrepeatPassword] = useState('');

  // Den her funktion vil blive kaldt når knappen trykkes
  const handleLogin = () => {
    window.alert('Denne ændring er beskræftet');
  };

  return (
    <form>
         {/*Form indholdsbokse*/}

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          placeholder="Kodeord"
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
      onClick={handleLogin}/>
    </form>
  );
}
