import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import './MainNavigation.styles.scss';

const MainNavigation = props => {
    return (
        <MainHeader>
            <h1 className="main-navigation__title">
                <Link to='/'>Your Tasks</Link>
            </h1>

            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>

            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>

        </MainHeader>
    )
}

export default MainNavigation;