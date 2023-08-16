import styled from 'styled-components';

export const CartSection = styled.section`
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 350px;
  margin-top: 108px;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(110%);
  transition: transform 0.3s ease-in-out;
  
  &.cart--active {
    transform: translateX(0);
  }
`;

export const CartItems = styled.div`
  padding: 1rem;
`;

export const CartItem = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const CartItemContent = styled.div``;

export const CartItemTitle = styled.h3`
font-size: 0.85rem;
font-weight: 500;
color: rgba(0,  0,  0 , 0.5);
margin-bottom: 8px;
`;

export const CartItemPrice = styled.h3`
padding-top:10px;
font-size: 18px;
font-weight: 500;
`;

export const CartResume = styled.div`
text-align:right;
margin-right:15px;
font-size: 1.5rem;
font-weight: 500;
padding: 35px 0 15px;
border-top: 1px solid #ddd;
`;