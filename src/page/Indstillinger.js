// Nadia

import "../styles/Indstillinger.css";
import Header from "../components/headers/HeaderIndstillinger";
import BrugerindholdForm from "../components/BrugerindholdForm.js";
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

      {/*Form - Overskrift*/}
      <div className="form-brugerindhold">
        <h3 className="form-overskrift">Skift brugerindhold</h3>
      </div>

      {/*Form indholdsbokse + knap*/}
      <BrugerindholdForm></BrugerindholdForm>
    </section>
  );
}
