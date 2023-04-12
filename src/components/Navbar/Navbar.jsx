import React, { useEffect, useState } from 'react'
import './navbar.css';
import './navbar.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  const [active, setActive] = useState('navBar');
  
  //function to toggle navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
  const removeNav = () => {
    setActive('navBar')
  }
  
  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/> TripBuddy</h1>
          </a>
        </div>
        <div  className={active}>
          <ul className="navLinks flex">
            <li className="navItem"><a href="/" className="navLink">Home</a></li>
            <li className="navItem"><a href="/" className="navLink">Packages</a></li>
            <li className="navItem"><a href="/" className="navLink">Shop</a></li>
            <li className="navItem"><a href="/" className="navLink">Pages</a></li>
            <li className="navItem"><a href="/" className="navLink">News</a></li>
            <li className="navItem"><a href="/" className="navLink">Contact</a></li>
            <button className='btn'><a href="/">Collections</a></button>

          </ul>

          <div onClick={removeNav}
            className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>


        <div onClick={showNav}
          className="togglerNavbar">
          <TbGridDots className='icon' />
        </div>

      </header>

    </section>
  )
}

export default Navbar;