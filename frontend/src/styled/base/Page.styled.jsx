import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';

export const Page = styled.section`
  padding: 3rem;
`;

export const PageTitle = styled.h1`
  cursor: default;
  padding: 2rem 0;
  padding-top: 2rem;
  padding-bottom: 3rem;
  font-size: 6rem;
  font-weight: 700;

  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.15rem;
  -webkit-text-stroke-color: black;
`;


export const PageMenu = styled.ul`
  display: flex;
  margin: 0 2.5rem 2rem;
`;

export const PageMenuItem = styled.li`
  cursor: pointer;
  color: ${styledMap`
    default: inherit;
    disabled: ${α('#404040', .5)};
  `};
   font-weight: ${styledMap`
    default: 600;
    disabled: 500;
  `};
  &:hover {
    color: #61A6C3;
  }
  margin: 0 2rem;
  transition: color 0.3s cubic-bezier(.25,.8,.25,1);
`
