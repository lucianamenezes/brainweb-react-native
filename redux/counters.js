import remove from 'lodash.remove';

// Action Types

export const ADD_COUNTER = 'ADD_NOTE';
export const DELETE_COUNTER = 'DELETE_NOTE';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SELECT_COUNTER = 'SELECT_COUNTER';

// Action Creators

let counterID = 0;

export function addCounter(counter) {
  return {
    type: ADD_COUNTER,
    id: counterID++,
    counter,
  };
}

export function deleteCounter(id) {
  return {
    type: DELETE_COUNTER,
    payload: id,
  };
}


export function incrementCounter(id) {
  return {
    type: INCREMENT_COUNTER,
    payload: id,
  };
}


export function decrementCounter(id) {
  return {
    type: DECREMENT_COUNTER,
    payload: id,
  };
}


export function resetCounter(id) {
  return {
    type: RESET_COUNTER,
    payload: id,
  };
}


export function selectCounter(id) {
  return {
    type: SELECT_COUNTER,
    payload: id,
  };
}

// reducer

const initialState = {
  counters: [],
  selectedCounter: {},
};

function countersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: [
          ...state.counters,
          {
            id: action.id,
            ...action.counter,
            name: `Counter ${action.id}`,
          },
        ],
      };
    case DELETE_COUNTER:
      const updatedCounters = state.counters.filter((counter) => counter.id != action.payload);
      return {
        selectedCounter: updatedCounters[0] ? [{ ...updatedCounters[0] }] : {},
        counters: [
          ...updatedCounters,
        ],
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => (counter.id == action.payload ? { ...counter, number: counter.number + 1 } : { ...counter })),
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => (counter.id == action.payload ? { ...counter, number: counter.number - 1 } : { ...counter })),
      };
    case RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => (counter.id == action.payload ? { ...counter, number: 0 } : { ...counter })),
      };
    case SELECT_COUNTER:
      return {
        ...state,
        selectedCounter: state.counters.filter((counter) => counter.id == action.payload),
      };
    default:
      return state;
  }
}

export default countersReducer;
