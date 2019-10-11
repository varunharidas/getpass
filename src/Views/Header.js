import React from 'react';
import "./Header.css";
import { Collapse, Nav, NavLink, Navbar, NavbarBrand, NavItem, NavbarToggler, Alert} from 'reactstrap'; 
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from './logo.svg';
import ReactGA from 'react-ga';


function initializeReactGA() {
  ReactGA.initialize('UA-127656145-1');
  ReactGA.pageview('/');
}
  
  

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>                   
      <Alert color="#f3f4f5" className="hellobar" isOpen={this.state.visible} toggle={this.onDismiss}>
      We're on Producthunt <span role="img" aria-label="cool">😎</span> <a className="link" href="https://www.producthunt.com/posts/getpass-password-generator">check it out</a>, also don't forget to bookmark us <span role="img" aria-label="why">🤷</span>      </Alert>
         <div className="max-width">
        

        <Navbar color="full light" light expand="md">
          <NavbarBrand>
          <NavLink to="/" tag={RRNavLink}><img src={logo} className="site-logo" alt="getpass-password-generator" /></NavLink> 
          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink className="menu-links" to="/about" activeClassName="active" tag={RRNavLink}>Company</NavLink> 
              </NavItem>
              <NavItem>
              <NavLink className="menu-links" to="/privacy" activeClassName="active" tag={RRNavLink}>Privacy</NavLink> 
              </NavItem>
              </Nav>

          </Collapse>

          {/* <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink className="menu-links" to="/password-api" activeClassName="active" tag={RRNavLink}>Sponsors</NavLink> 
            </NavItem>
            <NavItem>
            <NavLink className="menu-links" to="/about" activeClassName="active" tag={RRNavLink}>Company</NavLink> 
            </NavItem>
            </Nav> */}
        
        </Navbar>
      </div>
      </div>
      

    );
  }
}


export default Header;

