import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/Components/App';
import UserContextProvider from './Components/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <UserContextProvider>
      <App />
    </UserContextProvider>

);

