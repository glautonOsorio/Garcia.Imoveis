import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5rem;
  background-color:#ccc;
  padding: 30px;
  
`;

export const CheckoutTittle = styled.div`
    display:flex;
    align-items: center;
    font-size: 2rem;
  color: black;
  margin: 1rem;
`;


export const CheckoutCart = styled.div`
flex: 2;
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  background-color:white;
  border-radius:10px;
`;

export const CheckoutPaymethod = styled.div`
 flex: 1;
  width: 5%;
  padding: 20px;
  box-sizing: border-box;
  background-color:white;
  border-radius:10px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;

  thead {
    background: #ccc;
    font-weight: bold;
    color: black;
  }

  tbody {
    margin: 1px;
    border-color: black;
  }

  th,
  td {
    padding: 2px 0;
  }

  tbody tr td img {
    max-width: 80%;
    height: auto;
  }

  tbody tr:last-child td {
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    thead {
      display: none;
    }

    tbody td {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1200px) {
    tbody tr td:nth-child(1) {
      width: 15%;
    }
    tbody tr td:nth-child(2) {
      width: 50%;
    }
    tbody tr td:nth-child(3) {
      width: 10%;
    }
    tbody tr td:nth-child(4) {
      width: 5%;
    }
    tbody tr td:nth-child(5) {
      width: 15%;
    }
     }
`;



export const CheckoutButton = styled.button`
   
   padding: 10px;
  font-size: 1rem;
  font-size: 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background-color: #ffc500;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e3b000;
  }
  `;

export const redirectButtons = styled.div`
width:100%;
display: flex;
  justify-content: space-between;
  margin-top:5%;
  
 `;

export const PaymentOptions = styled.div`
display: flex;
flex-direction: column;

div {
  margin: 5px 0;
}

label {
  display: flex;
  align-items: center;
}

input {
  margin-right: 5px;
}
`;

