import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { HeaderWrapper, LogoWrapper, MenuWrapper } from './Header.styled';
import logo from '../../assets/logo-garcia.png';
import React, { useEffect, useState } from "react";
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


      <HeaderWrapper>
        <LogoWrapper>
          <Link to={'/'}>
            <img src={logo} alt="Logotipo" onClick={navigateHome} />
          </Link>
        </LogoWrapper>
        <MenuWrapper>
          <li>
            <Link to={'/produtos'}>Produtos</Link>
          </li>
          <li>
            <Link to={"/carrinho"} className="link">
              <div>
                <strong>Meu carrinho</strong>
                <span>
                  {{ compra } === 1 ? `${compra} item` : `${compra} itens`}
                </span> {/* Exibe a quantidade */}
                <AddShoppingCartIcon fontSize="medium" />
              </div>

            </Link>
          </li>

        </MenuWrapper>
      </HeaderWrapper>

    </React.Fragment>
  );
};

export default Header;
