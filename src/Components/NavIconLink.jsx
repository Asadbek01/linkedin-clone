import { Link } from 'react-router-dom'

const NavIconLink = ({ path, icon, text }) => {
    return (
        <Link to={path} className="d-flex flex-column mr-3 nav-link">
            <i className={icon}></i>
            <p className='mb-1'>{text}</p>
        </Link>
    )
}

export default NavIconLink