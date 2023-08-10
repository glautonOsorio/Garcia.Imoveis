import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import * as Styled from "./CheckoutComponent.style";

const Button = ({ to, children }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(to);
  };

  return <Styled.CheckoutButton onClick={handleClick}> {children}</Styled.CheckoutButton>;
};


export const CheckoutComponent = () => {
  const navigate = useNavigate(); 
  const [produtos, setProdutos] = useState([
    //Exemplo para teste
    {
      id: 5,
      nome: "Mesa de Criança colorida",
      preço: 80.99,
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
    <Styled.CheckoutContainer>
    <Styled.CheckoutCart>
        {produtos.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
        <Styled.CheckoutTittle>Lista de Compras</Styled.CheckoutTittle>
        <Styled.Table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Qtde.</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, index) => (
              <tr key={index}>
                <td><img src={item.imagem} alt="product_image" /></td>
                <td>{item.nome}</td>
                         <td>{item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{item.quantidade}</td>
                  <td>{(item.quantidade * item.preço).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
               <tr key="total">
                <td></td>
                <td></td>
                         <td></td>
                  <td>Valor total </td>
                  <td>{somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
          </tbody>
          </Styled.Table>
        
      </div>
      )}
      <Styled.redirectButtons>
        <Button to="/carrinho">Verificar carrinho</Button>
        <Button to="/produtos">Continuar comprando</Button>
        </Styled.redirectButtons>
      </Styled.CheckoutCart>
         
          <Styled.CheckoutPaymethod>
      <Styled.CheckoutTittle>Método de Pagamento</Styled.CheckoutTittle>

      <Styled.PaymentOptions>
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
      </Styled.PaymentOptions>
      <Styled.CheckoutButton onClick={handlePayment} disabled={isCheckoutDisabled}>
        Finalizar Compra
        </Styled.CheckoutButton>
         
      </Styled.CheckoutPaymethod>
   
    </Styled.CheckoutContainer>
  );
};
