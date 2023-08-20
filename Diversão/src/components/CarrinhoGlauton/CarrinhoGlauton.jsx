import { useNavigate } from "react-router-dom";
import React from "react";

import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import * as Styled from "./CarrinhoGlauton.style";
import { useEffect, useState } from "react";

const Carrinho = () => {
  const [somaPreços, setSomaPreços] = useState();
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pegaProduto = async () => {
      await Compra.Get().then((produto) => {
        setProdutos(produto);
      });
    };
    pegaProduto();
  }, []);
  useEffect(() => {
    const Soma = async () => {
      await Compra.Get().then((produto) => {
        let total = 0;
        produto.forEach(async (element) => {
          let somaTotal = await (total += Number(element.preço));
          if (produto.length > 3) {
            let desconto = somaTotal / 5;
            let preçoDescontado = somaTotal - desconto;
            setSomaPreços(`R$${preçoDescontado}.00`);
          } else {
            setSomaPreços(`R$${Number(somaTotal)}.00`);
          }
        });
      });
    };
    Soma();
  }, []);
  const redirectToProducts = () => {
    navigate("/produtos");
  };
  const redirectToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Styled.CarrinhoContainer>
      <Styled.CarrinhoContent>
        <Styled.CarrinhoTitulo>Lista de Compra</Styled.CarrinhoTitulo>
        <Styled.ProductOverflow>
          {produtos &&
            produtos.map((produto) => {
              return (
                <Styled.CarrinhoProductContent key={produto.id}>
                  <Styled.CarrinhoProductImage
                    src={produto.imagem}
                    alt="imagem do item"
                  />
                  <Styled.ProductCollum>
                    <h2>{produto.nome}</h2>
                    <span>
                      Preço:{produto.moeda}
                      {produto.preço}
                    </span>
                  </Styled.ProductCollum>
                </Styled.CarrinhoProductContent>
              );
            })}
        </Styled.ProductOverflow>
        <Styled.ProductBottomRow>
          <div>
            <Styled.ProductButton onClick={redirectToProducts}>
              Comprar mais produtos
            </Styled.ProductButton>
          </div>
          <div>
            <span>Preço atual:</span>
            <h2>{somaPreços}</h2>
          </div>
          <div>
            <Styled.ProductButton onClick={redirectToCheckout}>
              Terminar a Compra
            </Styled.ProductButton>
          </div>
        </Styled.ProductBottomRow>
      </Styled.CarrinhoContent>
    </Styled.CarrinhoContainer>
  );
};

export default Carrinho;
