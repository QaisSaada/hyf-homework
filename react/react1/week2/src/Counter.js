import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  

  console.log('Count function executed!');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    
    return () => clearTimeout(timerId);
  }, [count]);

  const reset = () => {
    setCount(0);
  }

  

  return (
    <>
      <h2>Counter:</h2>
      <div>{count}</div>
      <button onClick={reset}>Reset</button>
    
    </>
  );
  }