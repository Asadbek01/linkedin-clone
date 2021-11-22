import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const Footer2 = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs='12' className='mb-3 mt-4'>
                    <img className='footer-logo' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"/>
                    </Col>
                    <Col xs='12' sm='6' md='2' className='d-flex flex-column footer-links'>
                        <Link to='/' >About</Link>
                        <Link to='/' >Community Guidelines</Link>
                        <Link to='/' >Privacy & Terms</Link>
                        <Link to='/' >Sales Solutions</Link>
                        <Link to='/' >Safety Center</Link>
                    </Col>
                    <Col xs='12' sm='6' md='2' className='d-flex flex-column footer-links'>
                        <Link to='/' >Accessibility</Link>
                        <Link to='/' >Careers</Link>
                        <Link to='/' >Ad Choices</Link>
                        <Link to='/' >Mobile</Link>
                    </Col>
                    <Col xs='12' sm='6' md='2' className='d-flex flex-column footer-links'>
                        <Link to='/' >Talent Solutions</Link>
                        <Link to='/' >Marketing Solutions</Link>
                        <Link to='/' >Advertising</Link>
                        <Link to='/' >Small Business</Link>
                    </Col>
                    <Col xs='12' sm='6' md='2' className='d-flex flex-column footer-links'>
                        <Link to='/' >Questions</Link>
                        <Link to='/' >Manage Account</Link>
                    </Col>
                    <Col xs='12' md='4'>
                        <p className='copyright'>Select Language</p>
                        <Form.Control as="select">
                            <option>English (English )</option>
                            <option>Mandarin Chinese</option>
                            <option>Spanish</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                <p className="text-left mb-2 mt-2 copyright pl-3">LinkedIn Corporation © 2021</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer2