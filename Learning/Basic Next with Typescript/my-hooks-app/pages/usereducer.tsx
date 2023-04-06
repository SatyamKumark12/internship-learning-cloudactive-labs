import React, { useReducer } from 'react';

type CountState = number;

type CountAction = 
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

const initialState: CountState = 0;

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const HookUseReducer: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  )
};

export default HookUseReducer;
