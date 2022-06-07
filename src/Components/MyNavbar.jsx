import { useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import NavIconLink from './NavIconLink';
import MyButton from './MyButton';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../darkTheme/theme"

const MyNavbar = ({ data }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [darkMode, setDarkMode] = useState("light")
    const isDarkTheme = darkMode === "dark";
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${searchQuery}`)
        setSearchQuery('')
    }
    const toggle = () => {
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setDarkMode(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme && ["dark", "light"].includes(savedTheme)) {
            setDarkMode(savedTheme);
        } else if (prefersDark) {
            setDarkMode("dark");
        }
    }, []);
    return (
        isDarkTheme ? (
            <Navbar bg="dark" className='mb-3 p-0'>
                <Container className='px-3'>
                    <Link to="/" className='navbar-brand pb-2 font-weight-bold'>
                        <BsLinkedin size='30px' color='#2d50ec' />
                    </Link>
                    {/* <BsSearch /> */}
                    <Form onSubmit={handleSubmit} className='w-25'>
                        <FormControl type="search" placeholder="Search" className="mr-sm-2 w-100 d-none d-md-block" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </Form>
                    <Nav className="ml-auto icons" >
                        <NavIconLink darkTheme={darkMode} path='/' icon={pathname === '/' ? 'bi bi-house-door-fill text-center active ' : 'bi bi-house-door text-center '} text='Home' />
                        <NavIconLink darkTheme={darkMode} path='/network' icon={pathname === '/network' ? 'bi bi-people-fill text-center active  ' : 'bi bi-people text-center  '} text='Network' />
                        <NavIconLink darkTheme={darkMode} path='/jobs' icon={pathname.includes('/jobs') ? 'bi bi-briefcase-fill text-center active  ' : 'bi bi-briefcase   text-center'} text='Jobs' />
                        <NavIconLink darkTheme={darkMode} path='/messages' icon={pathname.includes('/messages') ? 'bi bi-chat-dots-fill text-center active' : 'bi bi-chat-dots   text-center'} text='Messages' />
                        <NavIconLink darkTheme={darkMode} path='/notifications' icon={pathname === '/notifications' ? 'bi bi-bell-fill text-center active' : 'bi bi-bell   text-center'} text='Notifications' />

                        <div className="d-flex align-items-center">
                            <img src={data?.image} className='nav-image ml-2 pl-0 ml-0' alt="" />
                            <NavDropdown className='ml-2 color-white'>
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
                        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                            <div>
                                <GlobalStyles />
                                <button className='mt-4 ml-5' onClick={toggle}>
                                    {isDarkTheme ?
                                        <span aria-label="Light mode" role="img">🌞</span> :
                                        <span aria-label="Dark mode" role="img">🌜</span>}
                                </button>
                            </div>
                        </ThemeProvider>
                    </Nav>
                </Container>
            </Navbar >
        ) : (

            <Navbar bg="light" className='mb-3 p-0'>
                <Container className='px-3'>
                    <Link to="/" className='navbar-brand pb-2 font-weight-bold'>
                        <BsLinkedin size='30px' color='#2d50ec' />
                    </Link>
                    {/* <BsSearch /> */}
                    <Form onSubmit={handleSubmit} className='w-25'>
                        <FormControl type="search" placeholder="Search" className="mr-sm-2 w-100 d-none d-md-block" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </Form>
                    <Nav className="ml-auto icons" >
                        <NavIconLink path='/' icon={pathname === '/' ? 'bi bi-house-door-fill text-center active ' : 'bi bi-house-door text-center '} text='Home' />
                        <NavIconLink path='/network' icon={pathname === '/network' ? 'bi bi-people-fill text-center active  ' : 'bi bi-people text-center  '} text='Network' />
                        <NavIconLink path='/jobs' icon={pathname.includes('/jobs') ? 'bi bi-briefcase-fill text-center active  ' : 'bi bi-briefcase   text-center'} text='Jobs' />
                        <NavIconLink path='/messages' icon={pathname.includes('/messages') ? 'bi bi-chat-dots-fill text-center active' : 'bi bi-chat-dots   text-center'} text='Messages' />
                        <NavIconLink path='/notifications' icon={pathname === '/notifications' ? 'bi bi-bell-fill text-center active' : 'bi bi-bell   text-center'} text='Notifications' />

                        <div className="d-flex align-items-center">
                            <img src={data?.image} className='nav-image ml-2 pl-0 ml-0' alt="" />
                            <NavDropdown className='ml-2 color-white'>
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
                        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                            <div>
                                <GlobalStyles />
                                <button className='mt-4 ml-5' onClick={toggle}>
                                    {isDarkTheme ?
                                        <span aria-label="Light mode" role="img">🌞</span> :
                                        <span aria-label="Dark mode" role="img">🌜</span>}
                                </button>
                            </div>
                        </ThemeProvider>
                    </Nav>
                </Container>
            </Navbar>
        )
    )

};

export default MyNavbar;
