import { QuantidadeComponent } from '../Quantidade/Quantidade.component';
import * as Styled from './Products.style';
import { FaTrash } from 'react-icons/fa'

export const ProductsComponent = () => {

    const products = [
        {
          "id": 1,
          "produto_id": 9,
          "nome": "Cadeira de Criança colorida",
          "preço": "R$30.00",
          "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg",
          "qty": 0,
        },
        {
          "id": 2,
          "produto_id": 5,
          "nome": "Cadeira de Criança colorida",
          "preço": "R$30.00",
          "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg",
          "qty": 0,
        },
        {
          "id": 3,
          "produto_id": 8,
          "nome": "Cadeira de Criança colorida",
          "preço": "R$30.00",
          "imagem": "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg",
          "qty": 0,
        }
    ]

    return(
        <Styled.ProductsWrapper>
          {products.map(product => {
            return(
              <Styled.ProductInfoWrapper key={product.id}>
                <Styled.ProductImageWrapper>
                  <img src={product.imagem} alt="Imagem do Produto" />
                </Styled.ProductImageWrapper>
                <Styled.ProductFeaturesWrapper>
                  <button><FaTrash/></button>
                  <h2>{product.nome}</h2>
                  <p>{product.preço}</p>
                  <QuantidadeComponent/>
                </Styled.ProductFeaturesWrapper>
              </Styled.ProductInfoWrapper>
            );
          })}
        </Styled.ProductsWrapper>
    );
}