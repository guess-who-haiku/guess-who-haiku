import styled from 'styled-components';
import α from 'color-alpha';

export const SolveBtn = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 1.5px solid ${α('#000', .5)};
  background-color: ${α('#000', .85)};
  color: white;
  font-size: 2rem;
  font-weight: 600;
  padding: .6rem .9rem .2rem;
  letter-spacing: .2rem;
  margin: 0 1rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:active {
    color: white;
    transform: translateY(1px);
  }
  &:hover {
    color: white;
  }
`;