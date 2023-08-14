import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeCheckout from "./pages/PaginaDeCheckout/PaginaDeCheckout";
import PaginaDeProdutos from "./pages/PaginaDeProdutos/PaginaDeProdutos";
import Provider from "./contexts/AppProvider";


function App() {
  return (
    <div className="app">
      <Router>
        <Provider>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" element={<PaginaDeProdutos />}/>
          <Route path="/carrinho" />
          <Route path="/checkout" element={<PaginaDeCheckout/>}/>
          <Route path="/*" />
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
