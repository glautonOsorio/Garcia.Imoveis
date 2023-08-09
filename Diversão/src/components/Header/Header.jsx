import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import React, { useEffect, useState } from "react";
import "./headerCss.css";
import { Link, useNavigate } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";

const Header = () => {
  const [compra, setCompra] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const quantidadeCompra = async () => {
      await Compra.Get().then((compras) => {
        setCompra(compras.length);
      });
    };
    quantidadeCompra();
  }, []);
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <header>
        <div className="headerContainer">
          <h1 className="headerH1" onClick={navigateHome}>
            Garcia.Moveis
          </h1>
          <ul className="headerList">
            <li>
              <Link to={"/produtos"} className="link">
                Produtos
              </Link>
            </li>
            <li>
              <AddShoppingCartIcon />
              {compra}
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
