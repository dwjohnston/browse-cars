import React, { Component } from 'react';
import './components/style/App.css';

import {Switch, Route, NavLink} from "react-router-dom";
import Feature from "./components/Feature"; 
import Search from "./components/Search"; 
import Display from "./components/Display"; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Acme Car Browser</h1>
        </header>
        <nav>
          <NavLink exact={true} to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>

        <section> 
          <Switch> 
            <Route exact path ="/" component = {Feature}/> 
            <Route path = "/search" component = {Search}/> 
            <Route path="/:make/model/:model" component={Display}/>
          </Switch> 
        </section> 

      </div>
    );
  }
}

export default App;
