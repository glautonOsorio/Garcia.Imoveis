import { createContext, useState } from "react";
import PropTypes from 'prop-types'


export const MathContext = createContext(
    {
        totalQty: 0,
        setTotalQty: () => {},
        totalPrc: 0,
        setTotalPrc: () => {},
    }
);

export const MathProvider = ({children}) => {
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrc, setTotalPrc] = useState(0);

    return(
        <MathContext.Provider value={{totalQty, setTotalQty, totalPrc, setTotalPrc}}>
            {children}
        </MathContext.Provider>
    );
}

MathProvider.propTypes = {
    children: PropTypes.node,
}