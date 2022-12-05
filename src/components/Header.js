// Freja
import React from "react"; 
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { Tilbageknap } from "./Tilbageknap";



export default function Header() {

    const Line = props => {
        const name = props.name
        return <div>{props.show && <h1>{name}</h1>}</div>
    }

    return (
        <header>
            <Tilbageknap></Tilbageknap>
            <div className="headerflex">
                 <NavLink className="headerlogo" to="/">
                    <Line name ="Hej" show/> 
                     
                     </NavLink> 
            </div>
        </header>
    );
}