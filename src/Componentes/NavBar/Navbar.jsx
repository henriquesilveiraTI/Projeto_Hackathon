import "./Navbar.css";
import { RiMentalHealthLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar__container">

        <RiMentalHealthLine className="navbar__icon" />

        <h1 className="navbar__logo">
          Equi<span>libra</span>
        </h1>

      </div>

    </nav>
  );
}

export default Navbar;