// Michelle

import React from "react";
import "../styles/Sortiment.css";

export default function sortiment() {
    
  const image = [1, 2, 3, 4, 5].map((n) => `/images/KigInd${n}.jpg`);

  return (
    <>
      <div className="Container_box">
        {image.map((image, key) => {
          return (
            <div key={key} className="item">
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
