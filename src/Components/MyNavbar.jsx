import { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import NavIconLink from './NavIconLink';
import MyButton from './MyButton';

const MyNavbar = ({ data }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${searchQuery}`)
        setSearchQuery('')
    }
    const toggle = () => {

    }

    return (
        <Navbar bg="light" className='mb-3 p-0'>
            <Container className='px-3'>
                <Link to="/" className='navbar-brand pb-2 font-weight-bold'>
                    <BsLinkedin size='30px' color='#2d50ec' />
                </Link>
                {/* <BsSearch /> */}
                <Form onSubmit={handleSubmit} className='w-25'>
                    <FormControl type="search" placeholder="Search" className="mr-sm-2 w-100 d-none d-md-block" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </Form>
                <Nav className="ml-auto icons">
                    <NavIconLink path='/' icon={pathname === '/' ? 'bi bi-house-door-fill text-center active' : 'bi bi-house-door-fill text-center'} text='Home' />
                    <NavIconLink path='/network' icon={pathname === '/network' ? 'bi bi-people-fill text-center active' : 'bi bi-people-fill text-center'} text='Network' />
                    <NavIconLink path='/jobs' icon={pathname.includes('/jobs') ? 'bi bi-briefcase-fill text-center active' : 'bi bi-briefcase-fill text-center'} text='Jobs' />
                    <NavIconLink path='/messages' icon={pathname.includes('/messages') ? 'bi bi-chat-dots-fill text-center active' : 'bi bi-chat-dots-fill text-center'} text='Messages' />
                    <NavIconLink path='/notifications' icon={pathname === '/notifications' ? 'bi bi-bell-fill text-center active' : 'bi bi-bell-fill text-center'} text='Notifications' />

                    <div className="d-flex flex-column mt-2 align-items-center">
                        <img src={data?.image} className='nav-image pl-0 ml-0' alt="" />
                        <NavDropdown title='Me' id="basic-nav-dropdown" className=''>
                            <Container>
                                <div className="d-flex mb-2 align-items-center">
                                    <img src={data?.image} alt="" className='dropdown-image' />
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
                    <div>
                        <button className='mt-4 ml-5' onClick={toggle}>
                            {/* {isDarkTheme ? */}
                            <span aria-label="Light mode" role="img">🌞</span> :
                            <span aria-label="Dark mode" role="img">🌜</span>
                        </button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )

};

export default MyNavbar;
