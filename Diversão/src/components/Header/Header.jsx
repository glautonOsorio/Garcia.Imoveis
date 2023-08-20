import { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { HeaderWrapper, LogoWrapper, MenuWrapper } from "./Header.styled";
import logo from "../../assets/logo-garcia.png";
import React from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import AppContext from "../../contexts/AppContext";

const Header = () => {
  const { cartItems, setIsCartVisible } = useContext(AppContext);

  const [compra, setCompra] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const quantidadeCompra = async () => {
      await Compra.Get().then((compras) => {
        setCompra(compras.length);
      });
    };
    quantidadeCompra();
  }, [cartItems]);
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={"/"}>
          <img src={logo} alt="Logotipo" onClick={navigateHome} />
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/produtos"}>Produtos</Link>
        </li>
        <li>
          <Link to={"/carrinho"} className="link">
            <div>
              <strong>Meu carrinho</strong>
            </div>
            <div
              onMouseOver={() => setIsCartVisible(true)}
              onMouseOut={() => setIsCartVisible(false)}
            >
              <span>
                {compra === 1
                  ? `${compra} item`
                  : compra > 1
                  ? `${compra} itens`
                  : "vazio"}
              </span>{" "}
              {/* Exibe a quantidade */}
              <AddShoppingCartIcon fontSize="medium" />
            </div>
          </Link>
        </li>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
