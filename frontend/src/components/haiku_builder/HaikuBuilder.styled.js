import styled from 'styled-components';
import α from 'color-alpha';
import { colors, font } from 'styled/theme';
import styledMap from 'styled-map';


export const HBContainer = styled.div`
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    font-weight: 200;
    line-height: 1.5;  
    margin: 4rem 3rem;
    min-height: 40rem;
`;

export const HaikuBox = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const LineIndex = styled.ul`
  padding-top: 4rem;
  padding-bottom: 4rem;
  height: 100%;
  width: 100%;
  background-color: #fff;
  font-family: 'Satisfy', cursive;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LineItem = styled.li`
    margin: .8rem;
  display: grid;
  grid-template-areas: "avatarLeft text avatarRight";
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, max-content) minmax(min-content, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 1rem;
  padding-bottom: 1.3rem;
  cursor: pointer;
`;

export const LIContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 2rem 4rem;
`;

export const NonLIContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 4rem;
    margin: 2rem;
`;

export const AuthorItem = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem;
    cursor: pointer;
    img:hover {border: 5px solid ${colors.utilityYellow};}
    img {
        border: ${styledMap`
            default: 5px solid transparent;
            data-selected: 5px solid ${colors.utilityYellow};
        `}  
    }
    
`;

export const LineText = styled.span`
  grid-area: text;
  justify-self: center;
  padding: .8rem 1.2rem .5rem;
  background-color: ${styledMap`
      default: transparent;
      highlightColor: ${props => α(props.highlightColor, .3)};
    `};
`;

export const Message = styled.h3`
    color: black;
    font-size: 2.5rem;
    font-weight: 300; 
    
`;

export const MessageHighlight = styled.span`
  color: ${colors.primary};
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
    color: ${colors.utilityRed};
    font-weight: ${font.weights.bold};
`;

export const AuthorIcon = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`;

export const UserItem = styled.li`
    padding: 1rem;
    margin: 2rem;
    border: 1.5px solid ${colors.utilityYellow};
    &:hover {
        background: ${colors.utilityYellow}
    }
`

export const Btn = styled.button`
  cursor: pointer;
  transition: all 0.25s ease 0s;
  border-radius: 3px;
  border: 1.5px solid #495057;
  font-weight: 400;
  line-height: 1.5;
  padding: .6rem .7rem .2rem;
  margin: 2rem;
  width: 15rem;
  
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    border-color: ${α('#000', .6)};
    background-color: ${α('#000', .85)};
    color: white;
  }
`