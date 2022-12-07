// Michelle
import React from "react";
import Header from '../components/Header';
import Overskrift from '../components/Overskrift';
import Karussel from '../components/Karussel';

export default function Forside() {
 
  return (
   <section>
    <Header />
    <div>
      <Karussel />
    </div>
    <div>
    <Overskrift overskrift="Dine Favoritter" />
    </div>
    <div>

    </div>
    <div>
      
      </div>
      <div>
      <Overskrift overskrift="Tilbud og kampagner" />
      </div>

   </section>
  );
};
