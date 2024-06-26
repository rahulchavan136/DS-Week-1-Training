import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import UserComponent from './contextApi/UserComponent';

ReactDOM.render(
  <React.StrictMode>
<UserComponent>
    <App />
  </UserComponent>    

  </React.StrictMode>,
  document.getElementById('root')
);
