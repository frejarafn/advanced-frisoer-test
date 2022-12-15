// Michelle
// ved at bruge props kan du genbruge h3. 

import React from "react";
import '../styles/Htre.css';



export default function HTre(props) {

    return (
        <>
        <div>
            <h3>{props.htre}</h3>
        </div>
        </>
    ); 
}; 