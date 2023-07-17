import { Link } from 'react-router-dom';
import './NavLinks.styles.scss';

const NavLinks = props => {
    return <>
        <ul className='nav-links'>
            <li><Link to="/users">All Users</Link></li>
            <li><Link to="/u1/tasks">My Tasks</Link></li>
            <li><Link to="/users/new">Create Tasks</Link></li>
            <li><Link to="/auth">Authenticate</Link></li>
        </ul>
    </>
}

export default NavLinks;