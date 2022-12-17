// Michelle

import React, { useState } from "react";
import "../styles/Dropdown.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };


//   Kodet af Gerda
  const handleMenu = (e) => {
    setSelectedMenu(e.target.textContent);
    setOpen(false);
  };

  return (
    <section className="dropdown_container">
      <div className="Search">
        <label>Vælg Service</label>
        <button className="Search_Input" onClick={handleOpen}>
          {selectedMenu}
        </button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={handleMenu}>Dame Klip</button>
            </li>
            <li className="menu-item">
              <button onClick={handleMenu}>Herre Klip</button>
            </li>
            <li className="menu-item">
              <button onClick={handleMenu}>Farvning</button>
            </li>
            <li className="menu-item">
              <button onClick={handleMenu}>Permanent</button>
            </li>
            <li className="menu-item">
              <button onClick={handleMenu}>Hår opsætning</button>
            </li>
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default App;