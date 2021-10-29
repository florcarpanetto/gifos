import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IsDarkProvider from './contexts/IsDarkContext';



ReactDOM.render(
  <React.StrictMode>
    <IsDarkProvider>
    <App />
    </IsDarkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

