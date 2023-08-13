import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro";
import { PaginaSquad } from "./pages/PaginaSquad/Index";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" />
          <Route path="/carrinho" />
          <Route path="/checkout" />
          <Route path="/squad" element={<PaginaSquad/>} />
          <Route path="/*" element={<PaginaDeErro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
