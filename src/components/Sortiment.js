// Michelle
import React from "react";
import "../styles/Sortiment.css";
import BookKnap from "../components/BookKnap";
import OverskriftSortiment from "../components/OverskriftSortiment";

export default function sortiment() {
  return (
    <>
      <section className="Container_box">
        <div>
          <img
            className="Dameklip"
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
            className="Dameklip"
            src="/images/categories/Klipning.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Herreklip" />
          </div>
          <div>
            <BookKnap />
          </div>
        </div> 

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Farvning.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Farvning" />
          </div>
          <div>
            <BookKnap />
          </div>
        </div>

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Permanent.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Permanent" />
          </div>
          <div>
            <BookKnap />
          </div>
        </div>

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Opsætning.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Opsætning" />
          </div>
          <div>
            <BookKnap />
          </div>
        </div>

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Bryn.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Bryn" /> 
          </div>
          <div>
            <BookKnap />
          </div>
        </div> 

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Vipper.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Vipper" /> 
          </div>
          <div>
            <BookKnap />
          </div>
        </div> 

        <div>
          <img
            className="Dameklip"
            src="/images/categories/Kur.jpg"
            alt="Dame klip"
          ></img>
          <div>
            <OverskriftSortiment overskriftsortiment="Kur" /> 
          </div>
          <div>
            <BookKnap />
          </div>
        </div>
      </section>
    </>
  );
}
