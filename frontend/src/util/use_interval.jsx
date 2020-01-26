import React, { useEffect, useRef } from "react";

/* custom hook to make setInterval declarative */

export function useInterval(callback, delay) {
  const myCallback = useRef();

  /* assign the callback */
  useEffect(() => {
    myCallback.current = callback;
  }, [callback]);

  /* set up setInterval */
  useEffect(() => {
    // if (step === 1) {
      function tock() {
        /* assigns the callback to the function tock */
        myCallback.current();
      }

      if (delay !== undefined) {
        /* interval must not be null */

        let ticker = setInterval(tock, delay);
        let timer = setTimeout(() => {
          clearInterval(ticker);
        }, 3000);

        return () => clearTimeout(timer);
      }
    // }
  }, [delay]);
}
