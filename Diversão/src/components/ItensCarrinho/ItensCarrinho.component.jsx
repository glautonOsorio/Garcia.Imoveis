import { useContext } from 'react';
import './ItensCarrinho.style.css';
import AppContext from '../../contexts/AppContext';

function ItensCarrinho() {
    const { isCartVisible, produtos } = useContext(AppContext);

    const totalPrice = produtos.reduce((acc, item) => {
        const priceValue = parseFloat(item.preço.replace('R$', '').replace(',', '.')); // Converte o preço para número
        return priceValue + acc;
      }, 0);
      
      const formattedTotalPrice = `R$${totalPrice.toFixed(2).replace('.', ',')}`; // Formata o preço novamente para exibição
      
      console.log(formattedTotalPrice); // Exibirá o preço total formatado corretamente


    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">
                    {produtos.length > 0 ? (
                    // Mapeia e renderiza os produtos no carrinho
                    produtos.map((item) => {
                        return (
                            <section key={item.id} className="cart-item">
                                <img
                                    src={item.imagem}
                                    alt="imagem do produto"
                                    className="cart-item-image"
                                />
                                <div className="cart-item-content">
                                    <h3 className="cart-item-title">{item.nome}</h3>
                                    <h3 className="cart-item-price">{item.preço}</h3>
                                </div>
                            </section>
                        );
                    })
                ) : (
                    // se Vazio
                    <div>Carrinho vazio</div>
                )}
            </div>
            <div className="cart-resume">Total: {formattedTotalPrice}</div>
        </section>
    );
}

export default ItensCarrinho;