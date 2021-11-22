import React from 'react';
import { Navbar, Nav, Form, FormControl, Container,NavDropdown, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsHouseDoorFill, BsFillChatDotsFill,BsSearch, BsFillBriefcaseFill,BsBellFill } from 'react-icons/bs'

const MyNavbar = () => {
 
  return (
	<Navbar bg="light" expand="lg" className='mb-3'>
	<Container>
			<Link to="/*" className='navbar-brand pb-2 font-weight-bold'>
			 <BsLinkedin size='25px' />
			</Link>
			<InputGroup className="mb-3">
    <InputGroup.Prepend>
	<BsSearch />  
	  </InputGroup.Prepend>
	<FormControl type="text" placeholder="Search" className="mr-sm-2" />
  </InputGroup>
	
		
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto ">
		  <Nav.Link href="#home"><BsHouseDoorFill size='20px' className="ml-5"/></Nav.Link>
		  <Nav.Link href="#link">< BsFillChatDotsFill size='20px'/></Nav.Link>
		  <Nav.Link href="#link">< BsFillBriefcaseFill size='20px'/></Nav.Link>
		  <Nav.Link href="#link">< BsFillChatDotsFill size='20px'/></Nav.Link>
		  <Nav.Link href="#link">< BsBellFill  size='20px'/></Nav.Link>
		  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
			  <p>Lorem ipsum dolor sit amet consectetur 
				  <br /> adipisicing elit. Nemo repudiandae.</p>
			<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action/3.3">Sign out</NavDropdown.Item>

		 </NavDropdown>
		</Nav>
	  </Navbar.Collapse>
	  </Container>
	</Navbar>
  )
		
};

export default MyNavbar;
