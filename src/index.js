import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom'; 
import App from './App';
import Feature from "./components/Feature"; 
import Search from "./components/Search"; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter >
    <Route path = "/" component = {App}>

    </Route>  
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
