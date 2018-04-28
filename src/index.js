import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, hashHistory} from 'react-router-dom'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter >
    <Route path = "/" component = {App}/> 
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
