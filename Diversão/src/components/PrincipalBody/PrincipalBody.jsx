import React from "react";
import { useEffect, useState } from "react";
import { ListaDeProdutos } from "../../services/ProdutosService/Produtos";
import * as Styled from "./PrincipalBody.style";
import { useNavigate } from "react-router";

function PrincipalBody() {
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const pegaProduto = async () => {
      await ListaDeProdutos.Get().then((produto) => {
        setProdutos(produto);
      });
    };
    pegaProduto();
  }, []);

  const navigateProducts = () => {
    navigate("/produtos");
  };
  return (
    <Styled.MainContainer>
      <Styled.MainTitle>Feliz Dias dos Pais</Styled.MainTitle>
      <Styled.MainCard>
        <div>
          <Styled.CardImage
            src="../../assets/ExemploPaiFilho.jpg"
            alt="Pai e Filho"
          />
        </div>
        <Styled.MainCardContent>
          <Styled.MainCardTitle>
            Estamos com um
            <Styled.MainCardSpecialText>Desconto</Styled.MainCardSpecialText>
          </Styled.MainCardTitle>
          <Styled.MainCardTextRow>
            Para você
            <Styled.MainCardSpecialText>Pai</Styled.MainCardSpecialText>
          </Styled.MainCardTextRow>
          <Styled.MainCardSpecialText>
            20% de Desconto
          </Styled.MainCardSpecialText>
          <Styled.MainCardTextRow>
            em uma compra de
            <Styled.MainCardSpecialText>3</Styled.MainCardSpecialText> ou mais
            moveis
          </Styled.MainCardTextRow>
          <Styled.CardButton onClick={navigateProducts}>
            Venha escolher o seu
          </Styled.CardButton>
        </Styled.MainCardContent>
      </Styled.MainCard>

      <Styled.MainFooter onClick={navigateProducts}>
        <Styled.MainFooterTitle>Veja nossos produtos</Styled.MainFooterTitle>
        <Styled.MainProductRow>
          {produtos &&
            produtos.map((produto) => {
              return (
                <div key={produto.id}>
                  <Styled.ProductImages
                    className="main-product-image"
                    src={produto.imagem}
                    alt="imagem de produto"
                  />
                </div>
              );
            })}
        </Styled.MainProductRow>
      </Styled.MainFooter>
    </Styled.MainContainer>
  );
}

export default PrincipalBody;
