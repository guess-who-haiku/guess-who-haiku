import styled from 'styled-components';
import α from 'color-alpha';
import { colors, font } from 'styled/theme';
import styledMap from 'styled-map';


export const HBContainer = styled.div`
    background-color: white;
    border: 1rem solid ${colors.primaryDark};
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    font-weight: 200;
    line-height: 1.5;  
    margin: 4rem 5rem;
    min-height: 40rem;
    padding: 2.5rem;
`;

export const LineIndex = styled.ul`
  padding-top: 5.5rem;
  height: 100%;
  background-color: #fff;
  font-family: 'Satisfy', cursive;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  position: relative;
`;

export const LineIndexItem = styled.li`
  margin: .8rem;
  display: grid;
  grid-template-areas: "avatarLeft text avatarRight";
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, max-content) minmax(min-content, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 1rem;
  padding-bottom: 1.3rem;
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
    img:hover {border: 3px solid black;}
    img {
        border: ${styledMap`
            default: 3px solid transparent;
            data-selected: 3px solid ${colors.utilityYellow};
        `}  
    }
    
`;

export const Message = styled.h3`
    color: black;
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
  transition: all 0.25s ease 0s;
  border-radius: 3px;
  border: 1.5px solid #495057;
  font-weight: 600;
  line-height: 1.5;
  padding: .6rem .7rem .2rem;
  margin: 0 1rem;
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