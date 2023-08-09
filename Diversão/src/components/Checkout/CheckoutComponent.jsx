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
      preço: 40.25,
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handlePayment = () => {
    //validação do pagamento aqui
   alert( `Compra bem sucedida no ${paymentMethod} no valor total de R$ ${somaTotal}! Obrigado por comprar conosco.`);

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
        <table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço Unitário</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
             
                  <td>{item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{item.quantidade}</td>
                  <td>{(item.quantidade * item.preço).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Valor total</h2>
        <p>{somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      )}
      
      <Link to="/carrinho">Verificar carrinho</Link>
      <Link to="/produtos">Continuar comprando</Link>

            <h2>Selecione o método de pagamento:</h2>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPaymentMethod === "creditCard"}
            onChange={() => setSelectedPaymentMethod("creditCard")}
          />
          Cartão de Crédito
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="debitCard"
            checked={selectedPaymentMethod === "debitCard"}
            onChange={() => setSelectedPaymentMethod("debitCard")}
          />
          Cartão de Débito
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="pix"
            checked={selectedPaymentMethod === "pix"}
            onChange={() => setSelectedPaymentMethod("pix")}
          />
          PIX
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="bankSlip"
            checked={selectedPaymentMethod === "bankSlip"}
            onChange={() => setSelectedPaymentMethod("bankSlip")}
          />
          Boleto Bancário
        </label>
      </div>

      <button onClick={handlePayment} disabled={isCheckoutDisabled}>
        Finalizar Compra
      </button>
         
    </div>
  );
};
