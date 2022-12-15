// Michelle
import React from 'react'
import "../styles/OverskriftSortiment.css";

// ved at bruge props kan du genbruge paragraffen. 

export default function OverskriftSortiment(props) {

    return(

        <>
         <div className="container">
            <p>{props.overskriftsortiment}</p> 
        </div>
        </>
    );
}; 
