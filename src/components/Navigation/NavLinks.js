import { Link } from 'react-router-dom';
import './NavLinks.styles.scss';

const NavLinks = props => {
    return <ul className='nav-links'>
            <li><Link to="/users/new">Tasks</Link></li>
            <li><Link to="/users">Users</Link></li>
         </ul>
}

export default NavLinks;