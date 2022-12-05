//Michelle 

import React from "react"; 
import Overskrift from '../components/Overskrift';
import TilbageHeader from '../components/TilbageHeader';
import '../styles/Kontakt.css';


export default function kontakt() {

    return(
        <>
        <section>
        
            <TilbageHeader/> 

         <div className="os">
            <div className="img"></div>
         <Overskrift overskrift="Kontakt salonen" />

        </div>

        </section>
        </>
    )
} 