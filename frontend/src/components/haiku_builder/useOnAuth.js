import { useState, useEffect } from 'react';

const useOnAuth = currentUser => {

  const [fn, setFn] = useState(null)

  const onAuth = cb => {
    if (currentUser) {
      cb(currentUser)
    } else {
      setFn(() => cb)
    }
  }

  useEffect(() => {
    if (fn && currentUser) {
      fn(currentUser)
    }

  }, [currentUser])



  return onAuth;

}

export default useOnAuth;
