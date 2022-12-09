// Michelle
import React from "react";
import "../styles/Forside.css";
import HeaderForside from '../components/headers/HeaderForside';
import Underskrift from '../components/Underskrift';
import HTre from '../components/HTre';
import Karussel from '../components/Karussel';
import Sortiment from '../components/Sortiment';
import Navbar from '../components/Navbar';


export default function Forside() {

  const Text = ['Alle pensionister og studerende får 20%',
    'på klipning og 10% på farvebehandling',
  ]

  return( 
  <section>
    <HeaderForside /> 
    <div> 
    <Underskrift underskrift="Velkommen Freja" />
    </div> 
    <div className="Velkommen Freja">
     <HTre htre="Favoritter" />
    </div>
    <div className="Favorit_container">
    
    </div>
    <div> 
      <HTre htre="Tilbud og kampagner" />
    </div> 
    <div className="Karussel_container">
    <Karussel /> 
    </div> 
    <div>
    {Text.map (tekst=> <p>{tekst}</p>)} 
    </div>
    <div className="">
    <Sortiment/>

    </div>
    <Navbar/> 
  </section>
  );
};

