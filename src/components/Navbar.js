// Gerda
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="forside" to="/"></NavLink>

      <NavLink className="behandlinger" to="/Behandlinger"></NavLink>

      <NavLink className="booking" to="/Booking"></NavLink>

      <NavLink className="login" to="/Login"></NavLink>

      <NavLink className="profil" to="/Profil"></NavLink>

      <NavLink className="information" to="/Information"></NavLink>
    </nav>
  );
}
