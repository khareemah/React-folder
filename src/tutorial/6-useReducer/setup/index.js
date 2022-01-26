import React, { useState, useReducer, useEffect, useRef } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  showModal: false,
  modalMessage: '',
};
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
      setName('');
    } else {
      dispatch({ type: 'EMPTY_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      {state.showModal && (
        <Modal modalMessage={state.modalMessage} closeModal={closeModal} />
      )}
      <form action="#" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {state.people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>;
            <button
              type="button"
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
              className="remove-item"
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
