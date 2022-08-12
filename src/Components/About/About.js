import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
//import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Button } from 'react-bootstrap';
import './style.css';



function About() {
  return (
    <div className="About">
          <br />
          <h1><b>À</b> PROPOS</h1>
          <h3>Je suis développeur web freelance et j'aime ça !</h3>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />

          <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>À PROPOS de moi</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Je me présente Amri, développeur web. Je souhaiterais à ce jour d’enrichir mon parcours professionnel autour des technologies JavaScript (React, React Native,…), Java/Jee, PHP, et donc d'intégrer une entreprise où j'aurai l'opportunité de confronter ma créativité à celle d'une équipe.
              </p>
              <p>
            Mes compétences me permettent de développer des sites web sans/avec des librairies (comme React), et de développer également des applications mobiles avec le framework React Natif.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
           
           </MDBCol>
          


          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>COMPÉTENCES</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Vous trouveriez ci-joint l'ensemble des languages, frameworks et libraires que je maîtrise, et que je pratique au quotidien 
            </p>
          
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            
           
            <p>
            <Button variant="outline-dark">Java/Jee</Button>
            <Button variant="outline-dark">JS</Button>
            <Button variant="outline-dark">HTML5</Button>
            <Button variant="outline-dark">CSS3</Button>
            <Button variant="outline-dark">React</Button>
            <Button variant="outline-dark">Json</Button>
            <Button variant="outline-dark">API</Button>
            <Button variant="outline-dark">SQL</Button>
            <Button variant="outline-dark">PHP</Button>
            <Button variant="outline-dark">DB</Button>
            
            </p>
            
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
              <div className="signature">Amri</div>
           </MDBCol>
          
          
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default About;
