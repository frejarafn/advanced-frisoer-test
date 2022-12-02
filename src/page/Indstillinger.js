// Nadia

import "../styles/Indstillinger.css";
export default function Indstillinger() {
    return (
            <section>
                    <div>
                        <h1>Brugerindhold</h1>
                    </div>

                    {/*Notifikation*/}
                    <div className="notifikationer">
                        <h4 className="notifikation-tekst">Notifikationer</h4>
                    </div>


                    {/*Form - start*/}
                    <div className="form">
                        <h4 className="brugerindhold-overskrift">Skift brugerindhold</h4>
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
                        <p className="skift-tekst">Skift</p>
                    </button>
            </section>

    )
}