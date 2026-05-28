import "./paginaServico.css";
import Navbar from "../../Componentes/NavBar/Navbar";
import Rodape from "../../Componentes/Rodapé/Rodape";
import {FaClock,FaTasks,FaChartLine,FaBrain} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaginaServico() {
    const navigate = useNavigate();
    return (
        <>

            <div className="pagina-servicos__root">

                <Navbar />

                <h1 className="titulo-servicos">
                    Bem-vindo ao  Equi<span className="equilibra">libra</span>
                    </h1>
               
                <p className="subtitulo-servicos">
                    Produtividade com equilíbrio para o seu home office.
                </p>

                <div className="servicos-container">

                    <div className="card-servico">

                        <FaClock className="card-servico__icon" />

                        <h2 className="card-servico__titulo">
                            Controle de Expediente
                        </h2>

                        <p className="card-servico__descricao">
                            Inicie e finalize seu expediente com apenas um toque.
                        </p>

                        <button onClick={() => {
            navigate("/expediente")}}
                        className="card-servico__botao">
                            Acessar
                        </button>

                    </div>


                    <div className="card-servico">

                        <FaTasks className="card-servico__icon" />

                        <h2 className="card-servico__titulo">
                            Gestão de Tarefas
                        </h2>

                        <p className="card-servico__descricao">
                            Organize suas tarefas e acompanhe sua produtividade diária.
                        </p>

                        <button className="card-servico__botao">
                            Acessar
                        </button>

                    </div>


                    <div className="card-servico">

                        <FaChartLine className="card-servico__icon" />

                        <h2 className="card-servico__titulo">
                            Relatórios
                        </h2>

                        <p className="card-servico__descricao">
                            Visualize métricas de desempenho e equilíbrio da equipe.
                        </p>

                        <button className="card-servico__botao">
                            Acessar
                        </button>

                    </div>


                    <div className="card-servico">

                        <FaBrain className="card-servico__icon" />

                        <h2 className="card-servico__titulo">
                            Bem-estar Mental
                        </h2>

                        <p className="card-servico__descricao">
                            Monitore seu nível de estresse e evite sobrecarga.
                        </p>

                        <button  onClick={() => {
            navigate("/bem-estar")}}
                        className="card-servico__botao">
                            Acessar
                        </button>

                    </div>

                </div>

            </div>

            <Rodape />

        </>
    );
}

export default PaginaServico;