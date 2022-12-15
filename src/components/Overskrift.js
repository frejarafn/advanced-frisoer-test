//Michelle

import React from "react";
import '../styles/Overskrift.css';

// ved at bruge props kan du genbruge overskriften. 

export default function Overskrift(props) {

    return (
        <>
        <div>
            <h1>{props.overskrift}</h1>
        </div>
        </>
    )
}; 