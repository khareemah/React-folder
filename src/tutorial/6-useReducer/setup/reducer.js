// reducer- takes the old state and takes in action and spits out new state
// in order to make any update in our state, we need to dispatch it

// reducer function
export const reducer = (state, action) => {
  // if you dont return the state from this function, the functionality will not make sense and there would be a big fat error because state will be undefined
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalMessage: 'Item added',
    };
  }
  if (action.type === 'EMPTY_VALUE') {
    return {
      ...state,
      modalMessage: 'please enter value',
      showModal: true,
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalMessage: 'Item deleted',
    };
  }
  throw new Error('no matching action type');
};
