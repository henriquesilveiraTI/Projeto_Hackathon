import "./Rodape.css";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Rodape() {
  return (
    <footer className="footer">

      <p className="footer__text">
        Equilibra © 2026
      </p>

      <div className="footer__socials">

        <button className="footer__social instagram">
          <FaInstagram />
        </button>

        <button className="footer__social facebook">
          <FaFacebook />
        </button>

        <button className="footer__social linkedin">
          <FaLinkedin />
        </button>

        <button className="footer__social github">
          <FaGithub />
        </button>

      </div>

    </footer>
  );
}

export default Rodape;