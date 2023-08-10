import * as Styled from './Carrinho.style';
import { useEffect, useState } from "react";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import { QuantidadeComponent } from '../Quantidade/Quantidade.component';


export const CarrinhoComponent = () => {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const fetchCarrinho = async () => {
            try {
                const produtosCarrinho = await Compra.Get();
                setCarrinho(produtosCarrinho)
            } catch (error) {
                console.error('erro ao buscar carrinho: ', error);                
            }
        }
        fetchCarrinho();
    }, [])

    return(
        <Styled.ProductsWrapper>
            <h2>Meu Carrinho</h2>
            {carrinho.length > 0 ? carrinho.map(produto => {
                return(
                    <Styled.ProductWrapper key={produto.id}>
                        <img src={produto.imagem} alt='Imagem do Produto' />
                        <Styled.ProductFeaturesWrapper>
                            <h2>{produto.nome}</h2>
                            <p>{produto.preco}</p>
                            <QuantidadeComponent/>
                        </Styled.ProductFeaturesWrapper>
                    </Styled.ProductWrapper>
                );
            }) : <p>Nenhum item no seu carrinho</p>}
        </Styled.ProductsWrapper>
    );
}