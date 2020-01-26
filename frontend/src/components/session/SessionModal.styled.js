import styled, { css } from 'styled-components';
import { colors, font } from 'styled/theme';
import styledMap from 'styled-map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as xIcon } from '@fortawesome/free-solid-svg-icons';

const flexColumnHelper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 2.5rem;
  color: white;
`
export const CloseBtn = styled(FontAwesomeIcon).attrs({ icon: xIcon })`
    color: white;
    font-size: 3.6rem;
    grid-column: close-start / close-end;
    margin-left: auto;
`;

export const Topbar = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  background-color: ${colors.primary};
  width: 95vw;
  min-width: 30rem;
  max-width: 50rem;
  min-height: 40vh;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
`;

export const Title = styled.h1`
  padding-top: 9rem; 
  font-size: 3.6rem;
  color: white;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 8px rgba(51,51,51,0.43);
`;

// ---------------------- Formik
export const Form = styled.form`
  ${flexColumnHelper}
  & > * {
    margin-bottom: .4rem;
  }
`;

export const InputGroup = styled.div`
  ${flexColumnHelper}
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  text-align: left; 
  padding: 1.5rem 2rem;
  width: 100%;
  border-bottom-width: .8rem;
  border-bottom-style: solid;
  border-bottom-color: ${P => {
    if (!P['data-touched']) {
      return colors.primaryDark;
    } else if (P['data-error']) {
      return colors.utilityRed;
    } else {
      return colors.utilityGreen;
    }
  }};
  
`;

export const ErrorMsg = styled.span.attrs({ component: 'div' })`
  font-size: 1.6rem;
  height: 3rem;
  padding: 1rem 0;
  color: ${colors.utilityRed};
  font-weight: ${font.weights.bold};
`;

export const Btn = styled.button.attrs({ type: 'submit' })`
  cursor: pointer;
  font-weight: ${font.weights.bold};
  width: 100%;
  color: white;
  background-color: ${styledMap`
    default: ${colors.utilityYellow};
    secondary: ${colors.utilityGreen};
  `};
  border-radius: 2px;
  padding: 1.5rem 2rem;
  border: none;
  outline: none;
`;