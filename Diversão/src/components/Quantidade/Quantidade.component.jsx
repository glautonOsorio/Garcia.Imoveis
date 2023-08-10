import { useContext, useState } from 'react';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';
import * as Styled from './Quantidade.style';

export const QuantidadeComponent = () => {

    const [qty, setQty] = useState(0);

    const handleAddQty = () => {
        setQty(qty + 1);
    }

    const handleSubQty = () => {
        if(qty > 0) {
            setQty(qty - 1);
        }
    }

    return(
        <Styled.QtyWrapper>
            <button onClick={handleAddQty}><CgMathPlus/></button>
            <span>{qty}</span>
            <button onClick={handleSubQty}><CgMathMinus/></button>       
        </Styled.QtyWrapper>
    );
}