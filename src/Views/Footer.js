import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer(/*props*/) {
  return (
    <div className="footer-bottom">
     
      <span align="center" id="text">© 2018 Getpass.xyz</span> 
      <Link className="footer-links" to={{ pathname: '/privacy' }} style={{ textDecoration: 'none' }}>Privacy Policy</Link>
      
    </div>
  );
}

export default Footer;
