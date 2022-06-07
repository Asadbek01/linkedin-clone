import { Link } from 'react-router-dom'

const NavIconLink = ({ path, icon, text, darkTheme }) => {
    return (
        darkTheme ? (
            <Link to={path} className="d-flex flex-column mr-sm-1 mr-3  nav-link "
            >
                <i className={icon} style={{ color: "#FFFFFFB3" }} ></i>
                <p className='mb-1' style={{ color: "#FFFFFFB3" }}>{text}</p>
            </Link>

        ) : (
            <Link to={path} className="d-flex flex-column mr-sm-1 mr-3 nav-link">
                <i className={icon}></i>
                <p className='mb-1'>{text}</p>
            </Link>
        )
    )
}

export default NavIconLink