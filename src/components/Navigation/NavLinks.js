import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../shared/context/authContext';
import './NavLinks.styles.scss';

const NavLinks = props => {

    const auth = useContext(AuthContext);

    return <>
        <ul className='nav-links'>
            { auth.isAdmin && ( <li><Link to="/users">All Users</Link></li> ) }
            { auth.isLoggedIn && ( <li><Link to="/u1/tasks">My Tasks</Link></li> ) } 
            { auth.isLoggedIn && ( <li><Link to="/users/new">Create Tasks</Link></li> ) }
            { auth.isLoggedIn && ( <li><button onClick={auth.logout}>Logout</button></li> ) }
            { !auth.isLoggedIn && ( <li><Link to="/auth">Authenticate</Link></li> ) }
        </ul>
    </>
}

export default NavLinks;