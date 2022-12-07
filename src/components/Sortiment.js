import React from "react"; 
import BookKnap from '../components/BookKnap';
import "../styles/Sortiment.css";

export default function sortiment() {

    return(
        <>
        <div>
        <img className="Kigind-billede" 
         src="/images/KigInd2.jpg" 
         alt="Salonen udefra">
         </img>
        </div>
        <div>
         <BookKnap/>
        </div>
        </>
    )
}; 