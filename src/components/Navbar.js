// Gerda
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="forside" to="/">
        Forside
      </NavLink>

      <NavLink className="behandlinger" to="/Behandlinger">
        Behandlinger
      </NavLink>

      <NavLink className="booking" to="/Booking">
        Booking
      </NavLink>

      <NavLink className="profil" to="/Profil">
        Profil
      </NavLink>

      <NavLink className="information" to="/Information">
        Information
      </NavLink>
    </nav>
  );
}
