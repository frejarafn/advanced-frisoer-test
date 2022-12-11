// Nadia

import "../styles/Indstillinger.css";
import Header from "../components/headers/HeaderIndstillinger";
import SwitchKnap from "../components/SwitchKnap";
import Navbar from "../components/Navbar";
export default function Indstillinger() {
  
  return (
    <section>
      <Navbar />
      <Header />
      <div>
        <h2 className="brugerindhold-overskrift">Brugerindhold</h2>
      </div>

      {/*Notifikation*/}
      <div className="notifikationer">
        <h3 className="notifikation-tekst">Notifikationer</h3>
        <div className="switch-notifikation">
          <SwitchKnap />
        </div>
      </div>

      <br></br> 

      {/*Form - start*/}
      <div className="form-brugerindhold">
        <h3 className="form-overskrift">Skift brugerindhold</h3>
      </div>

      {/*Form bokse*/}
      <form>
      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="text"
            placeholder="Brugernavn"
            className="input-indhold"
          />
        </div>
      </div>

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="text"
            placeholder="Kodeord"
            className="input-indhold"
            id="inputnr2"
          />
        </div>
      </div>

      <div className="container-skift-indhold">
        <div className="skiftindhold2">
          <input
            type="text"
            placeholder="Gentag kodeord"
            className="input-indhold"
            id="inputnr2"
          />
        </div>
      </div>

      {/*Skift knap ----- skal tjekkes
      <button className="skift-knap">Skift</button> */}
      
      {/*Skift knap 2*/}
      <input type="submit" value="Skift" className="SubmitKnapIndstillinger" 
      onClick={() => window.alert('Denne ændring er bekræftet')}/>
      </form>

    </section>
  );
}
