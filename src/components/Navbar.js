import {NavLink} from 'react-router-dom';

import home from '../img/home-solid.svg'
const Navbar = () => {
        return(
        <nav className='navbar'>
            <div className="div-link-container">
                <NavLink className="link-navbar"to='/'><img src={home} alt='logo' id='logo-nav'/></NavLink>
            </div>
            <div className="nav-about-us-container">
                <div className="div-link-container">
                    <NavLink className="link-navbar" to='/about-us'>About Us</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;