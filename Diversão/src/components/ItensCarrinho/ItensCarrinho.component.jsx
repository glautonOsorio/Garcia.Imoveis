import { useContext } from "react";
import React from "react";

import {
  CartSection,
  CartItems,
  CartItem,
  CartItemImage,
  CartItemContent,
  CartItemTitle,
  CartItemPrice,
  CartResume,
} from "./ItensCarrinho.style";
import AppContext from "../../contexts/AppContext";

function ItensCarrinho() {
  const { isCartVisible, produtos } = useContext(AppContext);

  const totalPrice = produtos.reduce((acc, item) => {
    const priceValue = parseFloat(
      item.preço.replace("R$", "").replace(",", ".")
    ); // Converte o preço para número
    return priceValue + acc;
  }, 0);

  const formattedTotalPrice = `R$${totalPrice.toFixed(2).replace(".", ",")}`; // Formata o preço novamente para exibição

  return (
    <CartSection className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <CartResume className="cart-resume">
        Total: {formattedTotalPrice}
      </CartResume>
      <CartItems>
        {/* Renderize os itens do carrinho */}
        {produtos.length > 0 ? (
          produtos.map((item) => (
            <CartItem key={item.id} className="cart-item">
              <CartItemImage
                src={item.imagem}
                alt="imagem do produto"
                className="cart-item-image"
              />
              <CartItemContent className="cart-item-content">
                <CartItemTitle className="cart-item-title">
                  {item.nome}
                </CartItemTitle>
                <CartItemPrice className="cart-item-price">
                  {item.preço}
                </CartItemPrice>
              </CartItemContent>
            </CartItem>
          ))
        ) : (
          <div>Carrinho vazio</div>
        )}
      </CartItems>
    </CartSection>
  );
}

export default ItensCarrinho;
