import { Container,Form,Row,Col } from 'react-bootstrap';
import React from 'react';
// import {Footerr} from "./Asset/Footerr.css"



const Footer = () => {
    return (
        
        <footer className="sticky-bottom">
        <Row className="text-center mt-5">
          <Col xs={{ span: 5, offset:2  }}>
          <Row>
          <Col xs={12} className="text-left mb-2">
          <img
            height="25px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        />
          </Col>
        </Row>
        
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
              
                <Row>
                
                  <Col xs={12} className="footer-links">
               
                    <p>
                      <a href="/" alt="footer link">
                       About
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                        Community Guidelines
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                        Privacy and Terms
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                    Sales Solutions
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                    Safety Center
                      </a>
                    </p>
                   
                  </Col>
                 
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>
                      <a href="/" alt="footer link">
                    Careers
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                      Ad Choices
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                    Mobile
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>
                      <a href="/" alt="footer link">
                      Talent Solution
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                       Marketing Solution
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                        Advertisng 
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                       Small Business
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>
                      <a href="/" alt="footer link">
                     Questions?
                      </a>
                    </p>
                    <p>
                      <a href="/" alt="footer link">
                        Manage your account and Privacy
                      </a>
                    </p>
                   
                  </Col>
                </Row>
              </Col>
              <Col>
              <Row>
                  <Col xs={12} className="footer-links">
                  <p>Select Language</p>
        <Form.Control as="select">
            <option>English (English )</option>
            <option>Mandarin Chinese</option>
            <option>Spanish</option>
        </Form.Control>
                  </Col>
              </Row>
              </Col>
            
            </Row>
            
           
            <Row>
              <Col xs={12} className="text-left mb-2 mt-2 copyright">
              LinkedIn Corporation © 2021
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>

    


    )
}

export default Footer