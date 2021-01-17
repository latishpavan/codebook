import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

let node = document.getElementById('root');

if (!node) {
    node = document.createElement('div');
    node.id = 'root';
    document.body.appendChild(node);
}

ReactDOM.render(<App />, node);
