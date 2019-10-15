import React, { Component } from 'react';
import Home from './Views/Home';
import About from './Views/About';
import Privacy from './Views/Privacy';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

const history = createBrowserHistory();


// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
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