import React, {useState} from "react";
import "../styles/Dropdown.css";

import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = () => {
  const [open, setOpen] = React.useState(false); 

  const handleOpen = () => {
    setOpen(!open); 
  }; 

  const handleMenuOne = () => {
    setOpen(false); 
  }; 

  const handleMenuTwo = () => {
    setOpen(false); 
  }; 
  const handleMenuthree = () => {
    setOpen(false); 
  }; 

  return (
    <section className="dropdown_container">
      <div className="Search">
        <input type="text" placeholder="Vælg service" 
          className="Search_Input"/>
          <button onClick={handleOpen}>Dropdown</button>
            {open ? (
         <ul className="menu">
               <li className="menu-item">
              <button onClick={handleMenuOne}>Dame Klip</button>
            </li>
            <li className="menu-item">
             <button onClick={handleMenuTwo}>Herre Klip</button>
           </li>
           <li className="menu-item">
            <button onClick={handleMenuthree}>Hår opsætning</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div></div>}
    </div>
    
    </section>
  );
}; 

export default Dropdown; 
