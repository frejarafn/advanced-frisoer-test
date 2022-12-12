// Michelle

import React from "react";
import BookKnap from "../components/BookKnap";
import "../styles/Sortiment.css";

export default function OptionsSortiment() {
  return (
    <section className="sortiment_container">
      <div className="Booking_btn">
        <img
          className="Kigind-image"
          src="/images/KigInd2.jpg"
          alt="Salonen udefra"
        ></img>
        <div className="btn">
          <BookKnap />
        </div>
      </div>
      <div>
        <img
          className="Kigind-image"
          src="/images/KigInd2.jpg"
          alt="Salonen udefra"
        ></img>
        <div className="btnB">
          <BookKnap />
        </div>
      </div>
    </section>
  );
}
