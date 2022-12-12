// alle + Michelle kalender
import React, { useState } from "react";
import "../styles/Booking.css";
import Header from "../components/headers/HeaderBooking.js";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

// Registrering af Syncfusion license key
import { registerLicense } from "@syncfusion/ej2-base";

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
  registerLicense(
    "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diWH5YdXFVQGRdVkE="
  );

  return (
    <div>
      <Header />
      <Navbar />
      <Dropdown />
      <div className="kalender">
        <DateTimePickerComponent placeholder="Vælg dato og tid"></DateTimePickerComponent>
      </div>
      <div className="kommentarer-form">
        <label htmlFor="">Yderligere kommentarer? </label>
        <input type="Kommentarer" className="form-control" />
        <button className="book-btn">Book</button>
      </div>
    </div>
  );
};

export default Booking;
