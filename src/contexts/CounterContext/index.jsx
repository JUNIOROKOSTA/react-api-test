import P from 'prop-types';
import { reducerCounter } from './reducer';
import { createContext, useContext, useReducer, useRef, useState } from 'react';
import { buildActions } from './build-action';

export const initState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useReducer(reducerCounter, initState);
  const actions = useRef(buildActions(setCount));
  return (
    <Context.Provider value={[count, actions.current]}>
      {children}
    </Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useMyCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use "useMyCounterContext" inside <>');
  }

  return [...context];
};
