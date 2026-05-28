import "./Navbar.css";

import { RiMentalHealthLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">

      <div className="navbar__left">

        <RiMentalHealthLine className="navbar__icon" />

        <h1 className="navbar__logo">
          Equi<span>libra</span>
        </h1>

      </div>

      <button onClick={() => {
            navigate("/usuario")}} className="navbar__user">
        <FaUserCircle />
      </button>

    </nav>
  );
}

export default Navbar;