import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removePerson(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" type="btn" onClick={() => setPeople([])}>
        clear all
      </button>
      <button className="btn" type="btn" onClick={() => setPeople(data)}>
        refresh
      </button>
    </>
  );
};

export default UseStateArray;
