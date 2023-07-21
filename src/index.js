import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // if you have a global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Assuming you have a div with id 'root' in your index.html file
);
