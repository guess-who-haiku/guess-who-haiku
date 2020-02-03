import { useState, useEffect } from 'react';

const useOnAuth = currentUser => {

  const [fn, setFn] = useState(null)

  const onAuth = cb => {
    if (currentUser) {
      cb()
    } else {
      setFn(() => cb)
    }
  }

  useEffect(() => {
    if (fn && currentUser) {
      fn()
    }

  }, [currentUser])



  return onAuth;

}

export default useOnAuth;
