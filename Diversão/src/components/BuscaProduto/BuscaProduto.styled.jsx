import styled from "styled-components";

export const StyledBuscaProduto = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  position: relative;

  input {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: none;
    outline: 2px solid #e5e5e5;
    border-radius: 9px;
  }

  .search-icon {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ffc500;
    border-radius: 0 9px 9px 0 ;
    padding: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MuiSvgIcon-root {
    color: white;
  }
`;