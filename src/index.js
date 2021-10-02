import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {AuthContextProvider} from '../src/Context/AuthContext'
import { ContextProvider } from './Context/Context';


ReactDOM.render(
  <AuthContextProvider>
    <ContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
