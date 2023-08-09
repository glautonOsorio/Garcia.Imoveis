import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as Styled from './PaginaDeCompra.style';
import { QuantidadeComponent } from '../../components/Quantidade/Quantidade.component';

export const PaginaDeCompra = () => {

  const products = [
    {
      "id": 1,
      "produto_id": 9,
      "nome": "Cadeira de Criança colorida",
      "preço": "R$30.00",
      "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg"
    },
    {
      "id": 2,
      "produto_id": 5,
      "nome": "Cadeira de Criança colorida",
      "preço": "R$30.00",
      "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg"
    },
    {
      "id": 3,
      "produto_id": 8,
      "nome": "Cadeira de Criança colorida",
      "preço": "R$30.00",
      "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg"
    }
  ]

  return(
    <>
      <Header/>
      <Styled.CarrinhoWrapper>
        <Styled.ProductsWrapper>
          {products.map(product => {
            return(
              <Styled.ProductInfoWrapper key={product.id}>
                <Styled.ProductImageWrapper>
                  <img src={product.imagem} alt="" />
                </Styled.ProductImageWrapper>
                <Styled.ProductFeaturesWrapper>
                  <h2>{product.nome}</h2>
                  <p>{product.preço}</p>
                  <QuantidadeComponent/>
                </Styled.ProductFeaturesWrapper>
              </Styled.ProductInfoWrapper>
            );
          })}
        </Styled.ProductsWrapper>
        <Styled.SummaryWrapper>
          <p>resumo da compra</p>
        </Styled.SummaryWrapper>
      </Styled.CarrinhoWrapper>
      <Footer/>
    </>
  );
}