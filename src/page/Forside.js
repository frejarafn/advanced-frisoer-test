// Michelle
import React from "react";
import "../styles/Forside.css";
import HeaderForside from '../components/HeaderForside';
import Underskrift from '../components/Underskrift';
import Karussel from '../components/Karussel';
import Sortiment from '../components/Sortiment';

export default function Forside() {


  return( 
  <section>
    <HeaderForside /> 
    <div> 
     
    </div> 
    <div className="Favoritter">
    <Underskrift underskrift="Favoritter" />
    </div>






  </section>

  );
}; 
