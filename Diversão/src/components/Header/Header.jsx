import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import React from "react";
import "./headerCss.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="headerContainer">
          <h1 className="headerH1">Garcia.Imoveis</h1>
          <ul className="headerList">
            <li>
              <Link to={"/"} className="link">
                Produtos
              </Link>
            </li>
            <li>
              <AddShoppingCartIcon />
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
