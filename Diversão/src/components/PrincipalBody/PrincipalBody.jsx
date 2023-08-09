import { useEffect, useState } from "react";
import { ListaDeProdutos } from "../../services/ProdutosService/Produtos";
import ImagemPrincipal from "../../assets/ExemploPaiFilho.jpg";
import * as Styled from "./PrincipalBody.style";

const PrincipalBody = () => {
  const [produtos, setProdutos] = useState();

  useEffect(() => {
    const pegaProduto = async () => {
      await ListaDeProdutos.Get().then((produto) => {
        setProdutos(produto);
      });
    };
    pegaProduto();
  }, []);
  return (
    <Styled.MainContainer>
      <Styled.MainTitle>Feliz Dias dos Pais</Styled.MainTitle>
      <Styled.MainCard>
        <div>
          <Styled.CardImage src={ImagemPrincipal} alt="Pai e Filho" />
        </div>
        <Styled.MainCardContent>
          <Styled.MainCardTitle>
            Estamos com um
            <Styled.MainCardSpecialText>
              Super Desconto
            </Styled.MainCardSpecialText>
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
          <button>Venha escolher o seu</button>
        </Styled.MainCardContent>
      </Styled.MainCard>

      <Styled.MainFooter>
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
};

export default PrincipalBody;
