import React, { Component } from 'react';
import Home from './Views/Home';
import About from './Views/About';
import Privacy from './Views/Privacy';
import ReactGA from 'react-ga';

import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

function initializeReactGA() {
  ReactGA.initialize('UA-127656145-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path='/' render={() => (
            <div className="maincontainer">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/about' render={() => (
            <div className="maincontainer">
              <About />
            </div>
          )}/>

          <Route exact={true} path='/privacy' render={() => (
            <div className="maincontainer">
              <Privacy />
            </div>
          )}/>
        
        </div>
      </BrowserRouter>
    );
  }
}
export default App;