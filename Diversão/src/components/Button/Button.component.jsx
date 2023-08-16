import * as Styled from "./Button.style";

export const ButtonComponent = ({ type, text, onClick }) => {
  return (
    <Styled.ButtonWrapper>
      {type === "button" && (
        <Styled.Button type={type} onClick={onClick}>
          {text}
        </Styled.Button>
      )}

      {type === "submit" && (
        <Styled.Button type={type} onClick={onClick}>
          {text}
        </Styled.Button>
      )}
    </Styled.ButtonWrapper>
  );
};

