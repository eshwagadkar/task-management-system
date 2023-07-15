import { Link } from 'react-router-dom';

import './Navigation.styles.scss';

const Navigation = () => {
    return (
        <header>
            <nav className='navigation'>
                 {/* Logo Container */}
                 {/* <Link to="/" className='logo-container'>
                    <Logo className='logo'/>
                 </Link> */}

                {/* Navbar links */}
                <ul className='nav-links-container'>
                    <li className='nav-link'><Link to="/tasks">Tasks</Link></li>
                    {/* <li className='nav-link'><Link to="/about">About</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;