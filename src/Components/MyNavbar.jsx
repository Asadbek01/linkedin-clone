import React from 'react';
import { Navbar, Nav, Form, FormControl, Container,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsHouseDoorFill, BsFillChatDotsFill,BsSearch, BsFillBriefcaseFill,BsBellFill } from 'react-icons/bs'

const MyNavbar = () => {
 
  return (
	<Navbar bg="light" expand="lg" className='mb-3'>
	<Container>
			<Link to="/*" className='navbar-brand pb-2 font-weight-bold'>
			 <BsLinkedin size='25px' />
			</Link>
		<Form inline>
		  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		</Form>
		{/* <BsSearch /> */}
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto icons " >
			<Link to='/home'>
		  <div  className='nav-link' ><BsHouseDoorFill size='20px ' className="mr-2 "/></div> 
		  <p className='Home'>Home</p>
			 </Link>
			 <Link to='/mynetwork'>
		  <div className='nav-link' >< BsFillChatDotsFill size='20px' className='mr-2'/></div>
		  <p className='mynetwork'>MyNetwork</p>
			 </Link>
			 <Link to='/jobs'>
		  <div className='nav-link' >< BsFillBriefcaseFill size='20px' className='mr-2'/></div> 
			 <p className='Jobs'>Jobs</p>
			 </Link>
			 <Link to='/messaging'>
		  <div className='nav-link' >< BsFillChatDotsFill size='20px' className='mr-2'/></div> 
		  <p className='messaging'>Messaging</p>
			 </Link>
			 <Link to='/notification'>
		  <div className='nav-link'>< BsBellFill  size='20px' className='mr-2'/></div> 
			 <p className='notification'>Notification</p>

			 </Link>


		  <NavDropdown title='Me' id="basic-nav-dropdown" >
			  
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
