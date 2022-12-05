// Nadia

import "../styles/Profil.css";
import Header from "../components/Header";
import { BsPersonFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { NavLink } from "react-router-dom";

export default function Profil() {
    return (
            <section>
                <Header></Header>
                    {/*Profil billede og tekst*/}
                    <div className="profil-main">
                        <BsPersonFill className="profil-billede"/>
                    </div>

                    <div className="profil-tekst">
                        <p className="profil-navn">Freja</p>
                    </div>

                     {/*Main indhold*/}
                    <div className="profil-tider">
                        <h2 className="tiderOverskrift">Mine tider</h2>
                        <h4 className="tidstekst">Dame klipning - d. 15 dec. kl. 10.00 <TiDeleteOutline className="slet-ikon1"/></h4>
                    </div>

                    <div className="profil-betaling">
                        <h2 className="betalingoverskrift">Gemte betalingskort</h2>
                        <h4 className="betalingstekst">xxxx-xxxx-xxxx-xxxx <TiDeleteOutline className="slet-ikon2"/></h4>
                    </div>

                    <button className="betalingskort-knap">
                        Tilføj betalingskort
                    </button>

                        <br></br>
                        <br></br>

                     {/*Indstillinger knap*/}
                    <div className="indstillinger-knap">
                        <NavLink to ="/Indstillinger">
                            Indstillinger
                        </NavLink>
                    </div>

                        <br></br>

                     {/*Log ud knap*/}
                    <div className="logud-knap">
                        <NavLink to ="/Login">Log ud</NavLink>
                    </div>
                    

            </section>

    )
}