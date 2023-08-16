import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeCheckout from "./pages/PaginaDeCheckout/PaginaDeCheckout";
import PaginaDeProdutos from "./pages/PaginaDeProdutos/PaginaDeProdutos";
import Provider from "./contexts/AppProvider";
import ItensCarrinho from "./components/ItensCarrinho/ItensCarrinho.component";

import { PaginaSquad } from "./pages/PaginaSquad/Index";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro";
import PaginaDoCarrinho from "./pages/PaginaDoCarrinhoGlauton/PaginaDoCarrinho";

function App() {
  return (
    <div className="app">
      <Router>
        <Provider>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" element={<PaginaDeProdutos />} />
          <Route path="/carrinho" element={<PaginaDoCarrinho />} />
          <Route path="/checkout" element={<PaginaDeCheckout />} />
          <Route path="/squad" element={<PaginaSquad />} />
          <Route path="/*" element={<PaginaDeErro />} />
        </Routes>
        <ItensCarrinho/>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
