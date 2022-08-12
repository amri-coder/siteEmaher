import React, {useState} from "react";
import Scroll from 'react-scroll';
import {Link} from "react-scroll";
import './style.css';
import { MDBNavItem } from "mdbreact";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from "mdbreact";


import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { MDBNav, MDBNavLink } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';

import { MDBBreadcrumbItem } from "mdbreact";


export default function Navbarr () {


  
  
  return (


<Router>
      
  
<MDBNavbar color="primary" primary expand="md" className="navbarColor">
        <MDBNavbarBrand>
          <strong className="blue-text" style={{color:"green"}}><Link activeClass="active" to="Home" spy={true} smooth={true} offset={0}>AMRI</Link></strong>
        </MDBNavbarBrand>
        
         
          <MDBNavbarNav right>

            
          <div className="navbarSansLogo">

            
            <MDBNavItem className="link0">
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={0}>Accueil</Link>
            </MDBNavItem>
            
            <MDBNavItem className="link1">
            <Link activeClass="active" to="Services" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
            </MDBNavItem>
           
           
            <MDBNavItem className="link2">
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>À propos</Link>
            </MDBNavItem>
           
            <MDBNavItem className="link3">
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            </MDBNavItem> 


            </div>
          
          </MDBNavbarNav>


      </MDBNavbar>
      
    </Router>
  );


  }




