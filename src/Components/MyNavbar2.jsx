import { useState, useEffect } from 'react'
import { Navbar, Nav, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import NavIconLink from './NavIconLink';

const MyNavbar = () => {

    const [data, setData] = useState(null)

    const fetchMyDetails = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMyDetails()
    }, [])
 
  return (
	<Navbar bg="light" className='mb-3 p-0'>
	<Container className='px-3'>
        <Link to="/" className='navbar-brand pb-2 font-weight-bold'>
            <BsLinkedin size='30px' color='blue'/>
        </Link>
		{/* <BsSearch /> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-25 d-none d-md-block" />
		<Nav className="ml-auto icons">
            <NavIconLink path='/' icon='bi bi-house-door-fill text-center' text='Home' />
            <NavIconLink path='/' icon='bi bi-people-fill text-center' text='Network' />
            <NavIconLink path='/' icon='bi bi-briefcase-fill text-center' text='Jobs' />
            <NavIconLink path='/' icon='bi bi-chat-dots-fill text-center' text='Messages' />
            <NavIconLink path='/' icon='bi bi-bell-fill text-center' text='Notifications' />

            <div className="d-flex flex-column mt-2 align-items-center">
                <img src={data?.image} className='nav-image pl-0 ml-0' alt="" />
                <NavDropdown title='Me' id="basic-nav-dropdown" className='pt-0'>
                    <Container>
                        <Link to='/profile' className="btn btn-outline-primary w-100 text-center">View Profile</Link>
                    </Container>
                    <NavDropdown.Divider />
                    <p className='pl-2 mb-1 font-weight-bold'>Account</p>
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Settings & Privacy</Link>
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Help</Link>
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Language</Link>
                    <NavDropdown.Divider />
                    <p className='pl-2 mb-1 font-weight-bold'>Manage</p>
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Posts & Activity</Link>
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Job Posting Account</Link>
                    <NavDropdown.Divider />
                    <Link to='/' className='dropdown-item pl-2 text-muted'>Sign out</Link>
                </NavDropdown>
            </div>

		</Nav>
	  </Container>
	</Navbar>
  )
		
};

export default MyNavbar;
