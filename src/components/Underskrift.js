// Michelle 

 // Dette er en fil for ændringer af h2 tags på siderne, som kan bruges

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
