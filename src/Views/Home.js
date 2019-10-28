import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from "./Header.js";
import Footer from "./Footer.js";
import DocumentMeta from 'react-document-meta';

import "./Home.css";
import { setTimeout } from "timers";
var handler, password;
var generator = require("generate-password");
var hash = JSON.parse(localStorage.getItem('hash'))



export default class Home extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi(handler)
      .then(res => this.setState({ password }),      

      )
  }

  callApi = async () => {
    if (handler === "1") {
      password = generator.generate({
        length: 16,
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: true,
        strict: true
      });
    } else if (handler === "2") {
      password = generator.generate({
        length: 10,
        numbers: true,
        excludeSimilarCharacters: true
      });
    } else {
      password = generator.generate({
        length: 16,
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: true
      });
    }

    return password;
  };


  handleClick = async () => {
    await this.callApi(handler).then(this.setState({ password }));
    hash.push(password);
    alert(hash); //logs
    localStorage.setItem('hash', JSON.stringify(hash));
  };

  changeText = async () => {
    const delay = ms => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };

    var b1 = document.getElementById("copy-button");

    if ((b1.onclick = "changeText();")) {
      await delay(500);

      document.getElementById("copy-button").innerHTML = "Copied";
      await delay(500);
      document.getElementById("copy-button").innerHTML = "Copy to Clipboard";
    }
  };

  

  render() {
    const meta = {
      title: 'Password Generator 🔐 Strong and Secure Passwords — Getpass',
      description: 'Generate strong and secure passwords quickly, also use our API to generate bulk passwords for your applications.',
      canonical: 'https://getpass.xyz',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'password generator, getpass, create strong password'
        }
      }
    };

    return (
      <DocumentMeta {...meta}>

      <div className="maincontainer">
        <Header />

        <Container>

          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <div>
                <h1 id="copy" className="password-display">
                  {" "}
                  {this.state.password}
                </h1>
                <CopyToClipboard text={this.state.password}>
                  <p
                    onClick={this.changeText}
                    id="copy-button"
                    className="copy-clipboard"
                  >
                    Copy to clipboard
                  </p>
                </CopyToClipboard>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <button
                className="buttonmain"
                onClick={e => this.handleClick((handler = "2"))}
              >
                Secure
              </button>
              <button
                className="buttonmain"
                onClick={e => this.handleClick((handler = "1"))}
              >
                Ultra
              </button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      </DocumentMeta>

      
    );
  }
}
