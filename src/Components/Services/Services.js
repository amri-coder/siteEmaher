import React from 'react';

import blog from '../images/Services/blog.png';
import siteVitrine from '../images/Services/siteVitrine.jpg';
import siteEcommerce from '../images/Services/siteEcommerce.jpg';
import seo from '../images/Services/seo.jpg';
import hebergement from '../images/Services/hebergement.jpg';
import maintenance from '../images/Services/maintenance.png';

import './style.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import Button from 'react-bootstrap/Button';



function Services() {
  return (


    <div className="App" id="Services">
      <h1> SERVICES</h1>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
         <h5 style={{color:"tomato"}}>votre site internet sur-mesure</h5><p>
Un site internet, c’est un formidable outil de communication. A condition qu'il témoigne du professionnalisme de votre entreprise.<br/> Voilà pourquoi le développement de votre site web nécessite un travail en amont, pour bien cerner l'univers de votre structure et l’image que vous souhaitez défendre.</p>

<h5 style={{color:"tomato"}}>Bien vous comprendre pour mieux vous servir</h5><p>
Ensemble, nous prendrons donc le temps nécessaire d'analyse des besoins correspondant à votre projet.<br/> Parce votre entreprise est unique, votre site internet doit l'être également.</p><p>

En me confiant la création de votre site internet, vous aurez donc l'assurance d'un véritable support de communication,<br/> en cohérence avec votre identité visuelle, qui vous aidera à booster la réputation de votre entreprise.</p>
         
      <p style={{color: "green"}}>LES DIFFÉRENTS TYPES DE SITE</p>
      
      <table className="table1">
        <tr>

          

          <td>
              <MDBCol className="MDBCol">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src={blog} waves />
                    <MDBCardBody>
                      <MDBCardTitle style={{ color: '#4b0082' }}>BLOG</MDBCardTitle>
                      <MDBCardText>Vous souhaitez partager à tout le monde votre Tour du Monde ? Vos recettes culinaires ? Ou toute autre choses. Je peux vous réaliser un blog pour cela !</MDBCardText>
                      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </td>
          
          <td>
            <MDBCol className="MDBCol">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src={siteVitrine} waves />
                    <MDBCardBody>
                        <MDBCardTitle style={{ color: '#4b0082' }}>SITE VITRINE</MDBCardTitle>
                        <MDBCardText>Vous exercez une activité et vous souhaitez vous faire connaître pour accroître cette activité ? Le site vitrine est l'idéal pour ce genre de situation.</MDBCardText>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                  </MDBCardBody>
                </MDBCard>
            </MDBCol>
          </td>

          <td>
              <MDBCol className="MDBCol">
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={siteEcommerce} waves />
                  <MDBCardBody>
                     <MDBCardTitle style={{ color: '#4b0082' }}>SITE E-COMMERCE</MDBCardTitle>
                     <MDBCardText>Envie de vendre vos produits en ligne ? Je peux réaliser pour vous une boutique de e-commerce permettant de les commercialiser, comprend tout ce dont vous avez besoin</MDBCardText>
                     <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </td>

          

        </tr>
      </table>
      <br />


<table className="table2">
  <tr>

    <td>
    <MDBCol className="MDBCol">
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem'  }} src={seo} className="MDBCardImage" />
          <MDBCardBody cascade className="text-center">
            <h5 className="indigo-text"><strong>Référencement (SEO)</strong></h5>
            <MDBCardText>Votre site internet est <b>développé</b> avec pour objectif <b>d’apparaître dans les premières pages</b> sur les moteurs de recherche.</MDBCardText>
           <lu>

            
             <li>
                   Indexation automatique des pages
             </li>
             <li>
                   Intégration des différents réseaux sociaux
             </li>

           </lu>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </td>
    <td>
    <MDBCol className="MDBCol">
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem'  }} src={hebergement} className="MDBCardImage" />
          <MDBCardBody cascade className="text-center">
            <h5 className="indigo-text"><strong>Hébergement</strong></h5>
            <MDBCardText>Votre site internet est hébergé sur un <b>serveur puissant</b>, robuste, supportant la montée en charge et situé au plus <b>proche de vos visiteurs</b>.</MDBCardText>
           <lu>

             <li>
             Serveurs dédiés
             </li>
             <li>
             Serveurs dans le cloud
             </li>
             

           </lu>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </td>

    <td>
    <MDBCol className="MDBCol">
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem'  }} src={maintenance}  className="MDBCardImage" />
          <MDBCardBody cascade className="text-center">
            <h5 className="indigo-text"><strong>Maintenance</strong></h5>
            <MDBCardText>Un site internet en bonne santé est un site internet mis à jour.
Les forfaits de maintenance proposés sont le fruits d’années d’expérience et des solutions apportées à mes clients afin de vous garantir un site internet performant et fiable.</MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </td>

  </tr>
</table>
<br/>


<div className="Devis">
          <h4 style={{color:"green"}}>Obtenir un devis pour la création de votre site</h4>
          <p>Je vous propose de répondre à quelques questions qui me permettront d'avoir une idée claire de votre projet web afin d'établir un devis précis.</p><p> Certaines questions vous posent problème ? Pas de souci ! Je suis là pour vous épauler, nous y reviendrons ensemble plus tard.</p>
          <p>
            <Button variant="succes" a href="mailto:amri.maher@yahoo.com">Me Contacter</Button>
          </p>
</div>
  

          
    </div>
    
  );
}

export default Services;
