import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #00121c;
    gap: 10px;
`;

export const LogoWrapper = styled.div`
    margin-left:1rem;
    img {
        width: 250px;
    }
`;

export const MenuWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 10px;
    list-style-type: none;

    li {
        font-size: 20px;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        color: #fff;
        position: relative;

        &:after {
            content: '';
            display: block;
            height: 2px;
            width: 0;
            background: #FFBB00;
            margin-top: 4px;
            transition: 0.3s;
            position: absolute;
        }

        &:hover::after {
            width: 100%;
        }
    }
`;