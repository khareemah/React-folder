import React, { useState } from 'react';

const UseStateCounter = () => {
  const increaseLater = () => {
    setTimeout(() => {
      setCounter((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular function</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
        <button className="btn" onClick={increaseLater}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
