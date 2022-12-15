// Michelle 

 // ved at bruge props kan du genbruge h2 overskriften. 

import React from "react";
import '../styles/Underskrift.css';

export default function Underskrift(props) {


    return (
        <>
        <div>
            <h2>{props.underskrift}</h2>
        </div>
        </>
    ); 
};  
