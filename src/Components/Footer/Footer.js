import React from "react";
import {Link} from "react-scroll";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon, MDBBtn } from 'mdbreact';
import './style.css';

const Footer = () => {
  return (
    < div id="Contact">
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#21d192" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
              Retrouvez-moi sur ...< a href="https://amri-coder.github.io/siteWeb/" style={{color:"Navy"}} className="lienURL">https://amri-coder.github.io/siteWeb/</a>
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
          
            <MDBContainer>
      
      
      
      <MDBBtn social="li">
        <MDBIcon fab icon="linkedin-in" className="pr-1" /><a href="https://www.linkedin.com/in/amri-amri-302228187/">Linkedin</a>
        </MDBBtn>
     
      
    
      <MDBBtn social="git">
        <MDBIcon fab icon="github" className="pr-1" /> <a href="https://github.com/amri-coder">Github</a>
        </MDBBtn>
     
    </MDBContainer>
              
             

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>DÉVELOPPEUR INFORMATIQUE INDÉPENDANT</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Développeur Web, je suis à votre disposition pour répondre à tout type de projets de création de sites internet, de développement spécifique ou d'applications web.
              </p>
              <p>
Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
           
           </MDBCol>
          


          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>LIENS UTILES</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/" className="dark-grey-text">
                Accueil
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                <Link to="Services" offset={+140}>Prestations</Link>
               
              </a>
            </p>
              
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Rueil Malmaison, 92, IDF, France
            </p>
            <p>
            <i className="fa fa-spinner mr-3" /> https://amri-coder.github.io/siteWeb/
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> amri.maher@yahoo.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +33 (0)6 52 96 02 44
            </p>
            
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
           
           </MDBCol>
          
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
         | AMRI | All rights reserved
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>
  );
}

export default Footer;