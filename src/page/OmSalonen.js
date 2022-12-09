// Nadia

import "../styles/OmSalonen.css";
import Header from "../components/HeaderOmSalon";
import Navbar from "../components/Navbar";
export default function OmSalonen() {
  return (
    <section>
      <Navbar />
      <Header />
      <div className="modesalon-main">
        <h1 className="modernesalon-overskrift">En moderne salon</h1>
        <p className="Mode-intro-tekst">
          Golden Hairstudio er en moderne frisør salon. Jeg holder mig opdateret
          i, hvad der rør sig af trends og kan stå inde for at give dig en unik
          frisure.
        </p>
        <img
          className="Kigind-billede"
          src="/images/KigInd1.jpg"
          alt="Salonen udefra"
        ></img>
      </div>

      <div className="minbaggrund-main">
        <h2 className="minbaggrund-overskrift">Min baggrund</h2>
        <p className="baggrundstekst">
          Jeg er uddannet fra Kolding Frisørskole med speciale i opsætning siden
          2017.
        </p>
        <img
          className="Kigind-billede"
          src="/images/KigInd2.jpg"
          alt="Salonen udefra"
        ></img>
      </div>

      <div className="kigind-main">
        <h2 className="kigind-overskrift">Kig ind i salonen</h2>
        <img
          className="Kigind-billede"
          src="/images/KigInd3.jpg"
          alt="Salonen udefra"
        ></img>
        <br></br>
        <img
          className="Kigind-billede"
          src="/images/KigInd4.jpg"
          alt="Salonen indenfor"
        ></img>
        <br></br>
        <img
          className="Kigind-billede"
          src="/images/KigInd5.jpg"
          alt="Salonen indenfor"
        ></img>
        <br></br>
      </div>
    </section>
  );
}
