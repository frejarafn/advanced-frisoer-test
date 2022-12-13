// Nadia

import "../styles/Profil.css";
import Header from "../components/headers/HeaderProfil";
import { BsPersonFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";
import Popup from "reactjs-popup";

export default function Profil() {
  const [user] = useAuthState(auth);
  return (
    <section>
      <Navbar />
      <Header></Header>
      {/*Profil billede og tekst*/}
      <div className="profil-main">
        <BsPersonFill className="profil-billede" />
      </div>

      <div className="profil-tekst">
        <p className="profil-navn">
          {" "}
          Freja{" "}
          {user && (
            <>
              <span className="user">{user.displayName || user.email}</span>
            </>
          )}
        </p>
      </div>

      {/*Main indhold*/}
      <div className="profil-tider">
        <h2 className="MinetiderOverskrift">Mine tider</h2>
        <h4 className="tidstekst">
          Dame klipning - d. 15 dec. kl. 10.00{" "}
          <TiDeleteOutline className="slet-ikon1" />
        </h4>
      </div>

      <div className="profil-betaling">
        <h2 className="GemteBetalingOverskrift">Gemte betalingskort</h2>
        <h4 className="betalingstekst">
          xxxx-xxxx-xxxx-xxxx <TiDeleteOutline className="slet-ikon2" />
        </h4>
      </div>

      {/*Tilføj betalingskort knap/popup*/}

      <Popup
        trigger={
          <button className="betalingskort-knap">Tilføj betalingskort</button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="popup-betaling">
            <h4 className="popup-header-betaling"> Tilføj betalingskort </h4>
            <div className="popup-indhold-betaling">
              <p className="inputBetalingOverksriftBoks">Kortholder's navn</p>
              <input
                label="Cardholder's Name"
                type="text"
                name="name"
                className="inputbetalingbokspopup"
                required
              />

              <p className="inputBetalingOverksriftBoks">Kort nummer</p>
              <input
                label="Card Number"
                type="number"
                name="card_number"
                className="inputbetalingbokspopup"
                required
              />

              <p className="inputBetalingOverksriftBoks">Udløbsdato</p>
              <input
                label="Expiration Date"
                type="month"
                name="exp_date"
                className="inputbetalingbokspopup2"
                required
              />

              <p className="inputBetalingOverksriftBoks">CVV</p>
              <input
                label="CVV"
                type="number"
                name="cvv"
                className="inputbetalingbokspopup2"
                required
              />
            </div>

            <button
              className="button-betaling"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              Tilføj
            </button>
          </div>
        )}
      </Popup>

      <br></br>
      <br></br>

      {/*Indstillinger knap*/}
      <div className="indstillinger-knap">
        <NavLink to="/Indstillinger">Indstillinger</NavLink>
      </div>

      <br></br>

      {/*Log ud knap*/}
      <div
        className="logud-knap"
        onClick={() => {
          signOut(auth);
        }}
      >
        <NavLink to="/Login">Log ud</NavLink>
      </div>

      <br></br>
    </section>
  );
}
