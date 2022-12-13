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
            <OverskriftSortiment overskriftsortiment="Dameklip" />
          </div>
          <div>
            <BookKnap />
          </div>
        </div>
      </section>
    </>
  );
}
