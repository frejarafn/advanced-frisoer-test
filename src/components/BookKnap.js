//Michelle
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookKnap.css";


export default function Book_Btn() {
  
  // Bookknap defined
  const navigate = useNavigate();

   //navigere til booking.js
  const navigateToBooking = () => {
     navigate("/Booking");
  };

  return (
    <>
      <button onClick={navigateToBooking} className="book">Book</button>
    </>
  );
}; 


