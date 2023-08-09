import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as Styled from './PaginaDeCompra.style';

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
      <Styled.MainWrapper>
        <Styled.ProductsWrapper>
          {products.map(product => {
            return(
              <Styled.ProductInfoWrapper key={product.id}>
                <img src={product.imagem} alt="Imagem do produto" />
                <h2>{product.nome}</h2>
                <p>{product.preço}</p>
              </Styled.ProductInfoWrapper>
            );
          })}
        </Styled.ProductsWrapper>
        <Styled.SummaryWrapper>
          
        </Styled.SummaryWrapper>
      </Styled.MainWrapper>
      <Footer/>
    </>
  );
}