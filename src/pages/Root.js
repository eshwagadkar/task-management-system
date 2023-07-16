import { Outlet, Link } from 'react-router-dom';

import MainNavigation from '../components/Navigation/MainNavigation';

import './root.styles.scss';

const RootLayout = () => {

    return (
        <>
            <MainNavigation />
            
            <main className='content'>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;