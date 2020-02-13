import styled from 'styled-components';

export const Page = styled.section`
  margin: 2rem;
  position: relative;
`;


export const DescriptionBox = styled.div`

  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
`;

export const DescriptionBoxText = styled.div`

  width: 50vw;
  font-weight: 700;
  line-height: 1.8;
  font-size: 1.5rem;
  color: black;
`;


export const PageTitle = styled.h1`
  padding: 2rem 0;
  font-size: 6rem;
  font-weight: 700;

  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.15rem;
  -webkit-text-stroke-color: black;
`;


const Geo = styled.img`
  position: absolute;
  clip: auto;

`;

//teal
export const Geo1 = styled(Geo)`
  z-index: -1;
  width: 20vw;
  height: auto;
  bottom: -12rem;
  right: -20rem;

`;

// yellow
export const Geo2 = styled(Geo)`
  width: 25vw;
  height: auto;
  left: -18vw;
  top: 10vh;
  z-index: 1;
`;

//purple
export const Geo3 = styled(Geo)`

  z-index: -10;
  left: -25vw;
  width: 40vw;
  top: -15vh;
  height: auto;

`;

//blue
export const Geo4 = styled(Geo)`
  z-index: -1;
  right: -8vw;
  bottom: 12vh;
  width: 15vw;
  height: auto;
`;