import React, {useState} from 'react';
import logo from '../images/logo3.png';
import {Link} from 'react-scroll';

function Navbar() {

    const {nav, setnav} = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active": "nav"}>
        <Link to='main' smooth={true} duration={1000} className='logo'>
            <img className='list-item' src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li className='list-item'><Link to='main' smooth={true} duration={1000}>Home</Link></li>
            <li className='list-item'><Link to='features' smooth={true} duration={1000}>Features</Link></li>
            <li className='list-item'><Link to='offer' smooth={true} duration={1000}>Gallery</Link></li>
            <li className='list-item'><Link to='about' smooth={true} duration={1000}>About</Link></li>
            <li className='list-item'><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar