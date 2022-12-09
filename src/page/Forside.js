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
    <Underskrift underskrift="Favoritter" />
    </div> 
    <div className="Favoritter">
   
    </div>






  </section>

  );
}; 
