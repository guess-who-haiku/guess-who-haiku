import styled from 'styled-components';
import { colors, font } from 'styled/theme';
import styledMap from 'styled-map';

export const HBContainer = styled.div`
    background-color: ${colors.primary};
    border: 1rem solid ${colors.primaryDark};
    font-weight: 200;
    line-height: 1.5;  
    margin: 4rem 5rem;
    min-height: 70%;
`;

export const LIContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 4rem 5rem;
`;

export const AuthorItem = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    img:hover {border: 3px solid white;}
    img {
        border: ${styledMap`
            default: 3px solid transparent;
            data-selected: 3px solid ${colors.utilityYellow};
        `}  
    }
    
`;

export const Message = styled.h3`
    color: ${colors.utilityYellow};
    font-size: 2.5rem; 
`;

export const ErrorMsg = styled.span`
    font-size: 1.6rem;
    height: 3rem;
    padding: 1rem 0;
    color: ${colors.utilityRed};
    font-weight: ${font.weights.bold};
`;

//add selected effect
export const AuthorIcon = styled.img`
    height: 6.5rem;
    width: 6.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`;

export const Btn = styled.button`
    cursor: pointer;
    font-weight: ${font.weights.bold};
    width: 15rem;
    border-radius: 2px;
    padding: 1.5rem 2rem;
    border: none;
    outline: none;
    margin: 1rem;
`