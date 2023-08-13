import { useEffect, useState } from "react";
import { ListaDeProdutos } from "../../services/ProdutosService/Produtos";
import ImagemPrincipal from "../../assets/ExemploPaiFilho.jpg";
import * as Styled from "./PrincipalBody.style";
import { useNavigate } from "react-router";

const PrincipalBody = () => {
  const [produtos, setProdutos] = useState([]);
  const [preços, setPreços] = useState();

  const navigate = useNavigate();

  const pegaProduto = async () => {
    await ListaDeProdutos.Get().then((produto) => {
      setProdutos(produto);
    });
  };
  const soma = async () => {
    await ListaDeProdutos.Get().then((produto) => {
      let total = 0;
      produto.forEach(async (element) => {
        let somaTotal = await (total += Number(
          element.preço * element.quantidade
        ));
        setPreços(Number(somaTotal));
      });
    });
  };
  let valor = preços - preços / 5;
  useEffect(() => {
    pegaProduto();
    soma();
  }, []);
  console.log(valor);
  const navigateProducts = () => {
    navigate("/produtos");
  };
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
          {preços && <p> {preços} </p>}
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
};

export default PrincipalBody;
