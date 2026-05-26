import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";


const roteador = createBrowserRouter([

  
  { 
    path: "",
    element: <PaginaInicial />
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




