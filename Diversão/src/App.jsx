import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import PaginaDeProdutos from "./pages/PaginaDeProdutos/PaginaDeProdutos";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/produtos" element={<PaginaDeProdutos />}/>
          <Route path="/carrinho" />
          <Route path="/checkout" />
          <Route path="/*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
