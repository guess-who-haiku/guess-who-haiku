import styled from "styled-components";
import theme from "styled/theme";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt as sharedIcon,} from '@fortawesome/free-solid-svg-icons';

export const HaikuSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HaikuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`;

export const HaikuBox = styled.div`
  font-family: 'Molle', cursive;
  height: 40rem;
  background: linear-gradient(to right, red, purple);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 1.5rem;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  }
`;

export const Haiku = styled.div`
  padding: 11rem 3rem;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-clip: text;
  position: relative;
`;

export const SharedIcon = styled(FontAwesomeIcon).attrs({icon: sharedIcon})`
  font-size: 5rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const HaikuLine = styled.p`
  font-weight: 700;
  line-height: 1.5;
  font-size: 2rem;
  /* color: ${theme.colors.primaryDark};
   */
  min-width: min-content;
  padding: 1rem 0;
`;

export const Title = styled.h2`
  color: ${theme.colors.primary};
  font-size: 3.5rem;
  padding-bottom: 2rem;
`;