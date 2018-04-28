import React, { Component } from 'react';
import logo from './logo.svg';
import './components/style/App.css';
import {Switch, Route} from "react-router-dom";
import Feature from "./components/Feature"; 
import Search from "./components/Search"; 
import NavLink from './components/NavLink'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>

        <section> 

          <Switch> 
            <Route exact path ="/" component = {Feature}/> 
            <Route path = "/search" component = {Search}/> 
          </Switch> 

        </section> 

      </div>
    );
  }
}

export default App;
