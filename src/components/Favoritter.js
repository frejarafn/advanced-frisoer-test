// Michelle 
// Kodet som en component- læs mere under perspektivering i rapporten  

import React from "react";
import "../styles/Favoritter.css";
import OverskriftSortiment from "../components/OverskriftSortiment";
import BookKnap from "../components/BookKnap";

export default function Favorit() {
  return (
    <>
      <div>
        <img
          className="Favorites"
          src="/images/categories/Klipning.jpg"
          alt="Dame klip"
        ></img>
        <div>
          <OverskriftSortiment overskriftsortiment="Dameklip" />
        </div>
        <div>
          <BookKnap />
        </div>
      </div>

      <div>
        <img
          className="Favorites"
          src="/images/categories/Klipning.jpg"
          alt="Dame klip"
        ></img>
        <div>
          <OverskriftSortiment overskriftsortiment="Opsætning" />
        </div>
        <div>
          <BookKnap />
        </div>
      </div>
    </>
  );
}; 
