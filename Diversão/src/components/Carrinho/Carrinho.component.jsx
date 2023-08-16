import * as Styled from "./Carrinho.style";
import { useEffect, useState } from "react";
import { ButtonComponent } from "../Button/Button.component";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import { Button } from "../Button/Button.style";
import { useNavigate } from "react-router-dom";

export const CarrinhoComponent = () => {
  const [carrinho, setCarrinho] = useState([]);
  const navigate = useNavigate();
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

  const redirectToNewPage = () => {
    navigate("/carrinho-glauton");
  };

  return (
    <>
      <ButtonComponent
        type="button"
        onClick={redirectToNewPage}
        text="Pagina Interessante"
      />
      <Styled.ProductsWrapper>
        <h2>Meu Carrinho</h2>
        {carrinho.length > 0 ? (
          carrinho.map((produto) => {
            return (
              <Styled.ProductWrapper key={produto.id}>
                <img src={produto.imagem} alt="Imagem do Produto" />
                <Styled.ProductFeaturesWrapper>
                  <h2>{produto.nome}</h2>
                  <p>
                    {produto.moeda}
                    {produto.preco}
                  </p>
                </Styled.ProductFeaturesWrapper>
              </Styled.ProductWrapper>
            );
          })
        ) : (
          <p>Nenhum item no seu carrinho</p>
        )}
      </Styled.ProductsWrapper>
    </>
  );
};

