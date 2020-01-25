import React, { Fragment as F, useState, useEffect } from 'react';
import { } from './SolveHaiku.styled';

const SolveHaiku = (props) => {

  const [selection, setSelection] = useState([]);
  const [currHaiku, setHaiku] = useState(null);

  async function fetchHaikuData() {
      props.getHaiku(props.match.params.haikuId);
  }

  useEffect(fetchHaikuData);

  return (
    <F>
      <h1>I'm a solve haiku page</h1>
      <h1>testing {`${selection}`}</h1>
    </F>
  );  

};

export default SolveHaiku

