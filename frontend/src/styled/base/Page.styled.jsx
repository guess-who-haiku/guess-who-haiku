import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
export const Page = styled.section`
  padding: 3rem;
`;

export const PageTitle = styled.h1`
  padding-bottom: 3rem;
  font-size: 6rem;
  font-weight: 700;
`;

export const PageMenu = styled.ul`
  display: flex;
  margin: 0 2.5rem 2rem;
  font-weight: 600;
`;

export const PageMenuItem = styled.li`
  cursor: pointer;
  margin: 0 2rem;
  color: ${styledMap`
    default: inherit;
    disabled: ${α('#404040', .5)};
  `};
`