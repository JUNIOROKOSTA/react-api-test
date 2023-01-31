import React from 'react';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
);
