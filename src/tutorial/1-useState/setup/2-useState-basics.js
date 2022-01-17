import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');
  const changeTitle = () => {
    if (title === 'random title') {
      setTitle('hello world');
    } else {
      setTitle('random title');
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <buton type="button" className="btn" onClick={changeTitle}>
        change text
      </buton>
    </>
  );
};
export default UseStateBasics;
