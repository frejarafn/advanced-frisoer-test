// Gerda
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { IoIosCut } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoInformation } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="navbooking">
        <NavLink className="booking" to="/Booking">
          <IoAddOutline />
        </NavLink>
      </nav>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink className="forside" to="/Forside">
              <IoIosHome />
            </NavLink>
          </li>
          <li>
            <NavLink className="behandlinger" to="/Behandlinger">
              <IoIosCut />
            </NavLink>
          </li>
          <li>
            <NavLink className="information" to="/Information">
              <IoInformation />
            </NavLink>
          </li>
          <li>
            <NavLink className="profil" to="/Profil">
              <IoPerson />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
