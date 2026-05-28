import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import PaginaServico from "./Paginas/PaginaDeServico/paginaServico";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Usuario from "./Paginas/Usuario/Usuario";
import BemEstar from "./Paginas/bemEstarMental/mental";
import Expediente from "./Paginas/expediente/expediente";

const roteador = createBrowserRouter([

  
  { 
    path: "",
    element: <PaginaInicial />
  },
  
  { 
    path: "/servicos",
    element: <PaginaServico />
  },
  {
    path: "/usuario",
    element: <Usuario />
  },

  {
    path: "/bem-estar",
    element: <BemEstar />
  },

  {
    path: "/expediente",
    element: <Expediente />
  },

  {
    path: "*",
    element: <h1>Página Não Encontrada!!</h1>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={roteador} />
      <ToastContainer />
    </>
  );
}

export default App;