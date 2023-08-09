import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import { PaginaDeCompra } from "./pages/PaginaDeCompra/PaginaDeCompra";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" />
          <Route path="/carrinho" element={<PaginaDeCompra/>}/>
          <Route path="/checkout" />
          <Route path="/*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
