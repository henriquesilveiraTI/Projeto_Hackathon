import "./PaginaInicial.css";
import Rodape from '../../Componentes/Rodapé/Rodape';
import BotaoCustomizado from "../../Componentes/BotaoCustomizado/BotaoCustomizado";



function PaginaInicial() {
    return (
        <div className="pagina-inicial__root">
            <h1>Projeto</h1>
            <BotaoCustomizado
                tipo="primario"
                onClick={() => alert("Botão Clicado!")}
            />

            <Rodape />
        </div>
    );
}

export default PaginaInicial;