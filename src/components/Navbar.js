import {NavLink} from 'react-router-dom';

const Navbar = () => {
        return(
        <nav className='navbar'>
            <div>
                <NavLink to='/'><img src='' alt='logo' id='logo-nav'/>Home</NavLink>
            </div>
            <div>
                <NavLink to='/random-country'>Random Country</NavLink>
            </div>
            <div>
                <NavLink to='/about-us'>About Us</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;