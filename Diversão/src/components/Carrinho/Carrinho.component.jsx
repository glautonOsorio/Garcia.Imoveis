import * as Styled from "./Carrinho.style";
import { useEffect, useState } from "react";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";

export const CarrinhoComponent = () => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const produtosCarrinho = await Compra.Get();
        setCarrinho(produtosCarrinho);
      } catch (error) {
        console.error("erro ao buscar carrinho: ", error);
      }
    };
    fetchCarrinho();
  }, []);

  return (
    <Styled.ProductsWrapper>
      <h2>Meu Carrinho</h2>
      {carrinho.length > 0 ? (
        carrinho.map((produto) => {
          return (
            <Styled.ProductFeaturesWrapper key={produto.id}>
              <Styled.ProductImage
                src={produto.imagem}
                alt="Imagem do Produto"
              />
              <div>
                <h2>{produto.nome}</h2>
                <span>
                  {produto.moeda}
                  {produto.preço}
                </span>
              </div>
            </Styled.ProductFeaturesWrapper>
          );
        })
      ) : (
        <p>Nenhum item no seu carrinho</p>
      )}
    </Styled.ProductsWrapper>
  );
};
