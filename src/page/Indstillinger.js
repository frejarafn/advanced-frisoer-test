// Nadia

import "../styles/Indstillinger.css";
import Header from "../components/Header";
export default function Indstillinger() {
    return (
            <section>
                <Header/>
                    <div>
                        <h1 className="brugerindhold-overskrift">Brugerindhold</h1>
                    </div> 

                    {/*Notifikation*/}
                    <div className="notifikationer">
                        <h4 className="notifikation-tekst">Notifikationer</h4>
                        <div className="switch-notifikation">

                        </div>
                    </div>

                    <br></br>

                    {/*Form - start*/}
                    <div className="form">
                        <h4 className="form-overskrift">Skift brugerindhold</h4>
                    </div>

                    {/*Form bokse*/}
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

                    <br></br>
                    
                     {/*Skift knap*/}
                    <button className="skift-knap">
                        Skift
                    </button>
            </section>

    )
}