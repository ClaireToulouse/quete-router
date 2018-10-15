import React, { Component } from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container ">
        <nav>
          <NavLink activeClassName="active" exact to="/">Home  </NavLink>
          <NavLink activeClassName="active" to="/notre-histoire">History</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History}/>
        </Switch>

      </div>
    );
  }
};

export default App;
