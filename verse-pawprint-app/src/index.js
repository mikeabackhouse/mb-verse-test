import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './scss/main.scss';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
        families: ['Roboto']
    }
})

ReactDOM.render(<App />, document.getElementById('root'));

