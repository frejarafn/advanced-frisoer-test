// alle + Michelle kalender
import React, {useState} from "react";
import "../styles/Booking.css";
import Dropdown from "../components/Dropdown"; 

import { IoMdArrowDropdown } from "react-icons/io";


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
  const handleMenuthree = () => {
    setOpen(false); 
  }; 

  return (
    <Dropdown/>
  );
}; 



export default Booking; 
