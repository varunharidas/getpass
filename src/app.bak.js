import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="header-title">PasswordPro</h1>
        </header>
        <body>
        <p className="password-content">
        {this.state.response}
        </p>
        <form>
        <input type="text" id="term" name="term" placeholder="Click on generate to create your unique password.." />
        <br></br>
        <button id="get-pass-button" className="button">Generate Password</button>
    </form>
        </body>     
      </div>
    );
  }
}

export default App;
