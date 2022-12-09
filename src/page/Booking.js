// alle + Michelle kalender
import React, { useState } from "react";
import "../styles/Booking.css";
import Header from "../components/HeaderBooking.js";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";

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
    <div>
      <Header/>
      <Navbar />
      <Dropdown />
    </div>
  );
};

export default Booking;
