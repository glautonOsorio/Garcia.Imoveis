import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";

export const CheckoutComponent = () => {
  const navigate = useNavigate(); 
  const [produtos, setProdutos] = useState([
    //Exemplo para teste
    {
      id: 5,
      nome: "Mesa de Criança colorida",
      preço: 80.0,
      quantidade: 1,
      imagem:
        "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg",
    },
    {
      id: 6,
      nome: "Cadeira de Criança colorida",
      preço: 40.0,
      quantidade: 4,
      imagem:
        "https://images-americanas.b2w.io/produtos/01/00/img/3653861/0/3653861027_1GG.jpg",
    },
  ]);

  // Pegar os itens do carrinho

  // useEffect(() => {
  //   const pegaProduto = async () => {
  //     await Compra.Get().then((produto) => {
  //       setProdutos(produto);
  //     });
  //   };
  //   pegaProduto();
  // }, []);

  const somaTotal = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preço * produto.quantidade;
  }, 0);

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(true);

  const handlePayment = () => {
    //validação do pagamento aqui
   alert("Compra bem sucedida! Obrigado por comprar conosco.");

   // da para limpar o carrinho aqui
   navigate("/");
  };

  useEffect(() => {
    setIsCheckoutDisabled(produtos.length === 0);
  }, [produtos]);

  return (
    <div>
      <h1>Checkout</h1>
      {produtos.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          <h2>Itens no carrinho:</h2>
          <ul>
            {produtos.map((item, index) => (
              <li key={index}>
                {item.nome}/ Valor Unitário: {item.preço}/ Quantidade:{" "}
                {item.quantidade}/ Valor Total: {item.quantidade * item.preço}
              </li>
            ))}
          </ul>
          <h2>Valor total</h2>
          <p>R$ {somaTotal} </p>
        </div>
      )}
      <Link to="/carrinho">Desejo verificar meu carrinho</Link>
      <Link to="/produtos">Desejo continnuar comprando</Link>
      <h2>Selecione o método de pagamento:</h2>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="creditCard">Cartão de Crédito</option>
        <option value="paypal">PayPal</option>
        <option value="transfer">Transferência Bancária</option>
        <option value="pix">PIX</option>
        <option value="bankSlip">Boleto Bancário</option>
      </select>
      <button onClick={handlePayment} disabled={isCheckoutDisabled}>
        Finalizar Compra
      </button>
         
    </div>
  );
};
