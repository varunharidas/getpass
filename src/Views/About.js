import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Header from "./Header.js";
import Footer from "./Footer.js";
import DocumentMeta from 'react-document-meta';


export default class About extends Component { 
  state = { 
  }
  
  render () {   
    const meta = {
      title: 'About — Getpass',
      description: 'Inside Getpass password generator.',
      canonical: 'https://getpass.xyz/about',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'about getpass password generator'
        }
      }
    };

      return (
        <DocumentMeta {...meta}>

        <div className="maincontainer">
                   <Header />

       <Container>
       <div>
     
        <h1 className="hero-text">Nothing much, nothing less, we just secure passwords.</h1>
       

        </div>
       
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <div className='content-para'>
            <p><b>Getpass</b> allows you to generate passwords easily from your browser, we never store or transmit these to our servers its born and dies within your browser. <b>Ping us at <a className="link" href="mailto:hello@getpass.xyz?Subject=Hello" target="_top" >hello@getpass.xyz.</a>
</b> 
            </p>
            </div>
            </Col>

         

        </Row>
          
          
         </Container>
                
             <Footer />

        </div>
        </DocumentMeta>

      )
   }
}