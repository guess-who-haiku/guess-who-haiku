import React, { Fragment as F, useState, useEffect } from 'react';
import { } from './SolveHaiku.styled';

const SolveHaiku = ({getHaiku, match }) => {

  const [selection, setSelection] = useState([]);

  function fetchHaikuData() {
    getHaiku(match.params.haikuId);
  }

  useEffect(() => {
    fetchHaikuData();
  }, [fetchHaikuData]);

  return (
    <F>
      <h1>I'm a solve haiku page</h1>
      <h1>testing {`${selection}`}</h1>
    </F>
  );  

};

export default SolveHaiku

