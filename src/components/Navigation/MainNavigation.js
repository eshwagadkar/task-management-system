import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

import './MainNavigation.styles.scss';

const MainNavigation = props => {
    return <>
        {/* Side Drawer */}
        <SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>

        {/* Main Page Header */}
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            
            <h1 className="main-navigation__title">
                <Link to='/'>Your Tasks</Link>
            </h1>

            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>


        </MainHeader>
    
    </>
    
}

export default MainNavigation;