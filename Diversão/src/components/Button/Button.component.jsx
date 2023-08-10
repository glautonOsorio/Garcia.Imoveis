import * as Styled from './Button.style';

export const ButtonComponent = ({type, text}) => {
    return(
        <Styled.ButtonWrapper>
            {type === 'button' && 
                <Styled.Button type={type}>{text}</Styled.Button>
            }

            {type === 'submit' &&
                <Styled.Button type={type}>{text}</Styled.Button>
            } 
        </Styled.ButtonWrapper>
    );
}