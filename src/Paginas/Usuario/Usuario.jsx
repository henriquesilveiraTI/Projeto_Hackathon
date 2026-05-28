import "./Usuario.css";
import Navbar from "../../Componentes/NavBar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import {
    FaTicketAlt,
    FaClock,
    FaCheckCircle,
} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Usuario() {
    const navigate = useNavigate();
    const usuario = {
        nome: "Henrique Silveira",
        email: "henrique@email.com",
        chamados: 12,
        andamento: 3,
        concluidos: 9,
    };

    return (
        <div className="usuario-root">
            <Navbar />

            <div className="usuario-container">

                <button
                    className="voltar-btn"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft />
                </button>
                <div className="perfil-card">
                    <FaUserCircle className="perfil-icon" />

                    <h2>{usuario.nome}</h2>
                    <p>{usuario.email}</p>
                </div>

                <div className="status-container">

                    <div className="status-card total">
                        <FaTicketAlt />
                        <span>{usuario.chamados}</span>
                        <p>Chamados</p>
                    </div>

                    <div className="status-card andamento">
                        <FaClock />
                        <span>{usuario.andamento}</span>
                        <p>Andamento</p>
                    </div>

                    <div className="status-card concluido">
                        <FaCheckCircle />
                        <span>{usuario.concluidos}</span>
                        <p>Concluídos</p>
                    </div>

                </div>

                <div className="acoes-card">
                    <button className="acao-btn">
                        Configurações
                    </button>

                    <button className="logout-btn">
                        Sair da Conta
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Usuario;