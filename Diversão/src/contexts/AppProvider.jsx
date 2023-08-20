import  { useState,useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { Compra } from "../services/CarrinhoService/CarrinhoService";

function Provider( {children} ) {

    const [produtos, setProdutos] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const [isCartVisible, setIsCartVisible] = useState(false);



  useEffect(() => {
    fetchCarrinho();
  }, [cartItems]);

  // Função carregar itens do carrinho
  const fetchCarrinho = async () => {
    try {
      const carrinho = await Compra.Get(); //usando o serviço Produtos
      setProdutos(carrinho);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };


  const value = {
    cartItems,
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
    produtos,
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;