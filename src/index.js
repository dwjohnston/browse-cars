import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom'; 
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 

import registerServiceWorker from './registerServiceWorker';

import * as Actions from './actions/actions'; 

import reducers from "./reducers/reducers"; 

const store = createStore(
    reducers,
    applyMiddleware(thunk), 
);


store.dispatch(Actions.fetchFeatureAction());
store.dispatch(Actions.fetchMakesAction());
store.dispatch(Actions.fetchModelsAction());


ReactDOM.render(<Provider store ={store}><BrowserRouter >
    <Route path = "/" component = {App}/>
</BrowserRouter></Provider> 
, document.getElementById('root'));
registerServiceWorker();
