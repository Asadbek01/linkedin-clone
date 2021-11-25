import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import {BsLinkedin} from 'react-icons/bs'

export default function HomeSideBarFooter() {
    const date = new Date().getFullYear();
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <div className='parentDiv '>
                        <div className="atags">
                       <a className='text-second' href=''>About</a> 
                       <a className='text-second' href=''>Accessibility</a>
                       <a className='text-second' href=''>Help Center</a>
                       <a className='text-second' href=''>Privicy & Terms</a>
                       <a className='text-second' href=''>Add Choices</a>
                       <a className='text-second' href=''>Advertising</a>
                       <a className='text-second' href=''>Business Services</a>
                       <a className='text-second' href=''>Get the Linkedin app</a>
                       <a className='text-second' href=''>More</a>
                       </div>
                    </div>
                     <div>
                        <p className='footerParagh'><span id='span'>Linked</span><BsLinkedin/> Linkedin Corparation © {date}</p>
                    </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
