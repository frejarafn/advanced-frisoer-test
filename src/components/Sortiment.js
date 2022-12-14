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
            src="/images/forside-dameklip1.png"
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
            src="/images/forside-herreklip1.png"
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
            src="/images/forside-farvning1.png"
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
            src="/images/forside-permanent1.png"
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
            src="/images/forside-opsætning1.png"
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
            src="/images/forside-bryn1.png"
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
            src="/images/forside-vipper1.png"
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
            src="/images/forside-kur1.png"
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
