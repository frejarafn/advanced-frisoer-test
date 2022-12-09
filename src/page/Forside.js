// Michelle
import React from "react";
import "../styles/Forside.css";
import Header from '../components/Header';
import Overskrift from '../components/Overskrift';
import Karussel from '../components/Karussel';
import Sortiment from '../components/Sortiment';

export default function Forside() {

  const Text= ['Alle pensionister og studerende får 20%',
                 'på klipning og 10% på farvebehandling',
                ]
 
  return (
   <section className="Container">
    <Header />
    <h2>Velkommen Freja</h2>
    <div className="Favoritter">
    <h2>Dine Favoritter</h2> 
    </div>
    <div className="Favorit_container">
      <Sortiment/>
    
    </div>
    <div className="tilbud_container">
      <h2>Tilbud og kampagner</h2> 
      <Karussel />
      </div>
    <div className="skrift_container">
    {Text.map (tekst=> <p>{tekst}</p>)} 
    </div>
     
      <div>
     
      </div>
      <div className="options">
       <Sortiment/>
      </div>

   </section>
  );
};
