// Freja
import React from "react"; 
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { Tilbageknap } from "./Tilbageknap";



export default function Header() {
    return (
        <header>
            <Tilbageknap></Tilbageknap>
            <div className="headerflex">
                 <NavLink className="headerlogo" to="/"> </NavLink> 


            </div>
        </header>
    );
}