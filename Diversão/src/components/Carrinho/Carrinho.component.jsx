import * as Styled from './Carrinho.style';
import { useEffect, useState } from "react";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import { QuantidadeComponent } from '../Quantidade/Quantidade.component';
import mockData from '../../server/db.json'
import { ResumoComponent } from '../Resumo/Resumo.component';


export const CarrinhoComponent = () => {

    const [carrinho, setCarrinho] = useState(mockData.carrinho);


    const handleUpdateQty = (productId, newQty) => {
        const updatedCarrinho = carrinho.map(item => {
            if(item.id === productId) {
                const newPrice = parseFloat(item.preco.replace('R$', '')) * newQty;
                return{...item, qty: newQty, precoTotal: `R$${newPrice.toFixed(2)}`}
            }
            return item;
        })
        setCarrinho(updatedCarrinho)
    }

    return(
        <Styled.ProductsWrapper>
            <h2>Meu Carrinho</h2>
            {carrinho.length > 0 ? carrinho.map(item => {
                return(
                    <Styled.ProductWrapper key={item.id}>
                        <img src={item.imagem} alt='Imagem do Produto' />
                        <Styled.ProductFeaturesWrapper>
                            <h2>{item.nome}</h2>
                            <p>{item.preco}</p>
                            <QuantidadeComponent produto={item} onUpdate={handleUpdateQty}/>
                            <p>Total: {item.precoTotal}</p>
                        </Styled.ProductFeaturesWrapper>
                    </Styled.ProductWrapper>
                );
            }) : <p>Nenhum item no seu carrinho</p>}
            <ResumoComponent carrinho={carrinho}/>
        </Styled.ProductsWrapper>
    );
}