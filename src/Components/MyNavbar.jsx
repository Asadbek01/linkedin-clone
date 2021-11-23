import { useState, useEffect } from 'react'
import { Navbar, Nav, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import NavIconLink from './NavIconLink';
import MyButton from './MyButton';

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
        // eslint-disable-next-line
    }, [])
 
  return (
	<Navbar bg="light" className='mb-3 p-0'>
	<Container className='px-3'>
        <Link to="/" className='navbar-brand pb-2 font-weight-bold'>
            <BsLinkedin size='30px' color='#2d50ec'/>
        </Link>
		{/* <BsSearch /> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-25 d-none d-md-block" />
		<Nav className="ml-auto icons">
            <NavIconLink path='/' icon='bi bi-house-door-fill text-center' text='Home' />
            <NavIconLink path='/network' icon='bi bi-people-fill text-center' text='Network' />
            <NavIconLink path='/jobs' icon='bi bi-briefcase-fill text-center' text='Jobs' />
            <NavIconLink path='/messages' icon='bi bi-chat-dots-fill text-center' text='Messages' />
            <NavIconLink path='/notifications' icon='bi bi-bell-fill text-center' text='Notifications' />

            <div className="d-flex flex-column mt-2 align-items-center">
                <img src={data?.image} className='nav-image pl-0 ml-0' alt="" />
                <NavDropdown title='Me' id="basic-nav-dropdown" className='pt-0'>
                    <Container>
                        <div className="d-flex mb-2 align-items-center">
                            <img src={data?.image} alt="" className='dropdown-image'/>
                            <div className="d-flex flex-column pl-2">
                                <h6 className='mb-0'>{data?.name} {data?.surname}</h6>
                            </div>
                        </div>
                        <Link to='/profile'> <MyButton type='button main-btn-outline' text='View Profile' /> </Link>
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
