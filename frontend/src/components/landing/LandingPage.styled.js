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
`;

export const Geo1 = styled(Geo)`
  z-index: -1;
  width: 20vw;
  height: auto;
  bottom: -10rem;
  right: -10rem;

`;

export const Geo2 = styled(Geo)`
  width: 10vw;
  height: auto;
  left: 0;
  z-index: 1;
`;

export const Geo3 = styled(Geo)`

  z-index: 0;
  left: -10vw;
  width: 17vw;
  height: auto;


`;