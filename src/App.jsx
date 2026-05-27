import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import PaginaServico from "./Paginas/PaginaDeServico/paginaServico";


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
    path: "*",
    element: <h1>Página Não Encontrada!!</h1>
  }
]);

function App() {
  return (
    <RouterProvider router={roteador} />
  );
}

export default App;