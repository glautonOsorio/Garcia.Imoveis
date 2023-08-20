import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import * as Styled from "./CheckoutComponent.style";
import React from "react";

const Button = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Styled.CheckoutButton onClick={handleClick}>
      {" "}
      {children}
    </Styled.CheckoutButton>
  );
};

export const CheckoutComponent = () => {
  const navigate = useNavigate();
  const [somaPreços, setSomaPreços] = useState();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const pegaProduto = async () => {
      await Compra.Get().then((produto) => {
        setProdutos(produto);
      });
    };
    pegaProduto();
  }, []);
  useEffect(() => {
    const Soma = async () => {
      await Compra.Get().then((produto) => {
        let total = 0;
        produto.forEach(async (element) => {
          let somaTotal = await (total += Number(element.preço));
          if (produto.length > 3) {
            let desconto = somaTotal / 5;
            let preçoDescontado = somaTotal - desconto;
            setSomaPreços(`R$${preçoDescontado}.00`);
          } else {
            setSomaPreços(`R$${Number(somaTotal)}.00`);
          }
        });
      });
    };
    Soma();
  }, []);

  const DeleteData = async () => {
    await Compra.Get().then((produto) => {
      produto.forEach(async (item) => {
        await Compra.Delete(item.id);
      });
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handlePayment = async () => {
    DeleteData();
    alert(
      `Compra bem sucedida no ${paymentMethod} no valor total de ${somaPreços}! Obrigado por comprar conosco.`
    );

    await navigate("/");
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
                </tr>
              </thead>
              <tbody>
                {produtos.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.imagem} alt="product_image" />
                    </td>
                    <td>{item.nome}</td>
                    <td>
                      {item.moeda}
                      {item.preço}
                    </td>
                  </tr>
                ))}
                <tr key="total">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Valor total </td>
                  <td>{somaPreços}</td>
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
        <Styled.CheckoutButton
          onClick={handlePayment}
          disabled={isCheckoutDisabled}
        >
          Finalizar Compra
        </Styled.CheckoutButton>
      </Styled.CheckoutPaymethod>
    </Styled.CheckoutContainer>
  );
};
