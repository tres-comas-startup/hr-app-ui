import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

console.debug("Start application with environment:", process.env)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
