import React from "react";
import { StyledCardProduto, AddToCartButton } from "./CardProduto.styled"; 
import { Compra } from "../../services/CarrinhoService/CarrinhoService";


const CardProduto = ({ item }) => {

  // Função para adicionar o item ao carrinho
  const adicionarAoCarrinho = () => {

    // Construindo o objeto do novo item do carrinho
    const novoItemCarrinho = {
      produto_id: item.id,
      nome: item.nome,
      preço: item.preço,
      imagem: item.imagem
    };

    Compra.Create(novoItemCarrinho);
   };

  return (
    <StyledCardProduto>
      <div className="image-container">
        <img src={item.imagem} alt={item.nome} loading="lazy" />
      </div>
      <p className="price">{item.preço}</p>
      <p className="title">{item.nome}</p>
      <AddToCartButton className="bt" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</AddToCartButton>
    </StyledCardProduto>
  );
};

export default CardProduto;
