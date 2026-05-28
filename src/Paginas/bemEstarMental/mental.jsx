import "./mental.css";
import Navbar from "../../Componentes/NavBar/Navbar";

import {
  FaArrowLeft,
  FaBrain,
  FaSmile,
  FaBed,
  FaHeartbeat,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function BemEstar() {

  const navigate = useNavigate();

  const dados = {
    estresse: "Moderado",
    humor: "Bom",
    sono: "7h 45min",
    energia: "72%",
  };

  return (
    <div className="bemestar-root">

      <Navbar />

      <div className="bemestar-container">

        <button
          className="voltar-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <div className="mental-card">

          <div className="mental-icon">
            <FaBrain />
          </div>

          <h1>Bem-estar Mental</h1>

          <p>
            Monitore seu nível de estresse
            e evite sobrecarga emocional.
          </p>

        </div>

        <div className="status-card stress">

          <FaHeartbeat />

          <div>
            <span>Nível de Estresse</span>
            <h2>{dados.estresse}</h2>
          </div>

        </div>

        <div className="info-grid">

          <div className="mini-card">

            <FaSmile />

            <span>Humor</span>

            <h3>{dados.humor}</h3>

          </div>

          <div className="mini-card">

            <FaBed />

            <span>Sono</span>

            <h3>{dados.sono}</h3>

          </div>

        </div>

        <div className="energia-card">

          <div className="energia-texto">

            <span>Nível de Energia</span>

            <h2>{dados.energia}</h2>

          </div>

          <div className="barra">
            <div className="barra-fill"></div>
          </div>

        </div>

        <button className="relax-btn">
          Iniciar Descanso
        </button>

      </div>

    </div>
  );
}

export default BemEstar;