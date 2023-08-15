import { useContext, useState } from 'react';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';
import * as Styled from './Quantidade.style';

export const QuantidadeComponent = ({produto, onUpdate}) => {

    const [qty, setQty] = useState(produto.qty);

    const handleAddQty = () => {
        const newQty = qty + 1;
        setQty(newQty);
        onUpdate(produto.id, newQty);
    }

    const handleSubQty = () => {
        if(qty > 0) {
            const newQty = qty - 1;
            setQty(newQty);
            onUpdate(produto.id, newQty);
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