import styled from 'styled-components';
import theme from 'styled/theme';

export const HBContainer = styled.div`
    background-color: ${theme.colors.primary};
    border: 1rem solid ${theme.colors.primaryDark};
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
`;

export const Message = styled.h3`
    color: ${theme.colors.utilityYellow};
    font-size: 2.5rem; 
`;

export const ErrorMsg = styled.span`
    font-size: 1.6rem;
    height: 3rem;
    padding: 1rem 0;
    color: ${theme.colors.utilityRed};
    font-weight: ${theme.font.weights.bold};
`;

//add selected effect
export const AuthorIcon = styled.img`
    height: 6rem;
    width: 6.5rem;
    border-radius: 50%;
    
`;

export const Btn = styled.button`
    cursor: pointer;
    font-weight: ${theme.font.weights.bold};
    width: 15rem;
    border-radius: 2px;
    padding: 1.5rem 2rem;
    border: none;
    outline: none;
    margin: 1rem;
`
