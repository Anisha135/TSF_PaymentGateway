import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='home' className='navbar-logo' onClick={closeMobileMenu}
          spy={true}
          smooth={true}>
            TSF
            <i class="fas fa-hands-helping"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='home' className='nav-links' onClick={closeMobileMenu}
              spy={true}
              smooth={true}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='about'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='contact'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
