// alle + Michelle kalender
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../styles/Booking.css";

const Booking = () => {
  
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

  return (
    
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu_item">
            <button onClick={handlemenuOne}>menu 1</button>
          </li>
          <li className="menu_item">
            <button onClick={handlemenuTwo}>Menu 2</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  ); 
}; 

export default Booking; 
