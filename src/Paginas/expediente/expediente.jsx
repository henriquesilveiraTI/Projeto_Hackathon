import "./Expediente.css";

import Navbar from "../../Componentes/NavBar/Navbar";

import {
  FaArrowLeft,
  FaClock,
  FaPlay,
  FaPause,
  FaStop,
  FaCalendarAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Expediente() {

  const navigate = useNavigate();

  const dados = {
    entrada: "08:00",
    pausa: "12:15",
    retorno: "13:10",
    saida: "17:30",
    horas: "08h 35min",
  };

  return (
    <div className="expediente-root">

      <Navbar />

      <div className="expediente-container">

        <button
          className="voltar-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <div className="header-card">

          <div className="header-icon">
            <FaClock />
          </div>

          <h1>Controle de Expediente</h1>

          <p>
            Monitore sua jornada de trabalho
            e acompanhe seus horários.
          </p>

        </div>

        <div className="horas-card">

          <FaCalendarAlt />

          <div>
            <span>Horas Trabalhadas Hoje</span>

            <h2>{dados.horas}</h2>
          </div>

        </div>

        <div className="timeline-container">

          <div className="timeline-card entrada">

            <FaPlay />

            <div>
              <span>Entrada</span>
              <h3>{dados.entrada}</h3>
            </div>

          </div>

          <div className="timeline-card pausa">

            <FaPause />

            <div>
              <span>Pausa</span>
              <h3>{dados.pausa}</h3>
            </div>

          </div>

          <div className="timeline-card retorno">

            <FaPlay />

            <div>
              <span>Retorno</span>
              <h3>{dados.retorno}</h3>
            </div>

          </div>

          <div className="timeline-card saida">

            <FaStop />

            <div>
              <span>Saída</span>
              <h3>{dados.saida}</h3>
            </div>

          </div>

        </div>

        <button className="registrar-btn">
          Registrar Ponto
        </button>

      </div>

    </div>
  );
}

export default Expediente;