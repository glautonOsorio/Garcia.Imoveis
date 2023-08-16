import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeProdutos from "./pages/PaginaDeProdutos/PaginaDeProdutos";
import { PaginaSquad } from "./pages/PaginaSquad/Index";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" element={<PaginaDeProdutos />} />
          <Route path="/carrinho" />
          <Route path="/checkout" />
          <Route path="/squad" element={<PaginaSquad />} />
          <Route path="/*" element={<PaginaDeErro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
