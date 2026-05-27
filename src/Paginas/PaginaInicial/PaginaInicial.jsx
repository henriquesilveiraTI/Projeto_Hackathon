import "./PaginaInicial.css";
import Navbar from "../../Componentes/NavBar/Navbar";
import { FaUser } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaginaInicial() {

  const navigate = useNavigate();

  return (
    <div className="pagina-inicial__root">

      <Navbar />

      <div className="login-card">

        <div className="icone-usuario">
          <FaUser className="icone-usuario__icon" />
        </div>

        <div className="formulario">

          <input
            type="text"
            placeholder="Username"
            className="input-login"
          />

          <input
            type="password"
            placeholder="Password"
            className="input-login"
          />

          <button
            onClick={() => navigate("/servicos")}
            className="botao-login"
          >
            Login
          </button>

        </div>

        <p className="social-text">
          Social Login
        </p>

        <div className="social-buttons">

          <button className="social facebook">
            <FaFacebook />
          </button>

          <button className="social instagram">
            <FaInstagram />
          </button>

          <button className="social linkedin">
            <FaLinkedin />
          </button>

        </div>

      </div>

    </div>
  );
}

export default PaginaInicial;