import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import React, { useEffect, useState } from "react";
import "./headerCss.css";
import { Link } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";

const Header = () => {
  const [compra, setCompra] = useState();
  useEffect(() => {
    const quantidadeCompra = async () => {
      await Compra.Get().then((compras) => {
        setCompra(compras.length);
      });
    };
    quantidadeCompra();
  }, []);
  return (
    <React.Fragment>
      <header>
        <div className="headerContainer">
          <h1 className="headerH1">Garcia.Moveis</h1>
          <ul className="headerList">
            <li>
              <Link to={"/"} className="link">
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
