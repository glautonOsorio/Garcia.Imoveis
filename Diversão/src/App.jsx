import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeCheckout from "./pages/PaginaDeCheckout/PaginaDeCheckout";
import PaginaDeProdutos from "./pages/PaginaDeProdutos/PaginaDeProdutos";
import { PaginaDeCompra } from "./pages/PaginaDeCompra/PaginaDeCompra";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" element={<PaginaDeProdutos />} />
          <Route path="/carrinho" element={<PaginaDeCompra />} />
          <Route path="/checkout" element={<PaginaDeCheckout />} />
          <Route path="/*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
