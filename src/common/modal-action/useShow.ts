import { useEffect, useState } from 'react';

export const useShowModal = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const countDown = setTimeout(() => {
      setShow(true);
     
    }, 10000);

    const resetTime = () => {
      const current = Date.now();

      console.log('current', current)
    }
    window.addEventListener('click', resetTime);

    return () => {
      clearTimeout(countDown);
    };
  }, [isShow]);

  return {
    isShow,
  };
};
