import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//  import MessageApp from './messageApp/messageApp';
import TodoApp from './todoApp/todoApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <>
    {/* <MessageApp/> */}
    <TodoApp/>
    </>
  // </React.StrictMode>
);


reportWebVitals();
