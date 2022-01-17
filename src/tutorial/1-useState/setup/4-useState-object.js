import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    age: 24,
    name: 'peter',
    message: 'random message',
  });
  const changeMessage = () => {
    let newPerson;
    if (person.message === 'random message') {
      newPerson = { ...person, message: 'hello world' };
    } else {
      newPerson = { ...person, message: 'random message' };
    }
    setPerson(newPerson);
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
