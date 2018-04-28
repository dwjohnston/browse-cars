import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom'; 
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';


import reducers from "./reducers/reducers"; 

const store = createStore(reducers)


ReactDOM.render(<Provider store ={store}><BrowserRouter >
    <Route path = "/" component = {App}/>
</BrowserRouter></Provider> 
, document.getElementById('root'));
registerServiceWorker();
