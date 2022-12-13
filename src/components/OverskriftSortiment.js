// Michelle
import React from 'react'
import "../styles/OverskriftSortiment.css";

export default function OverskriftSortiment(props) {

    return(

        <>
         <div className="container">
            <p>{props.overskriftsortiment}</p> 
        </div>
        </>
    );
}; 
