import { useState } from 'react';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';
import * as Styled from './Quantidade.style';

export const QuantidadeComponent = () => {

    const [quantidade, setQuantidade] = useState(0);

    const handleAddQty = () => {
        setQuantidade(quantidade + 1)
    }

    const handleSubQty = () => {
        setQuantidade(quantidade - 1);
    }

    return(
        <Styled.QtyWrapper>
            <button onClick={handleAddQty}><CgMathPlus/></button>
            <span>{quantidade}</span>
            <button onClick={handleSubQty}><CgMathMinus/></button>          
        </Styled.QtyWrapper>
    );
}