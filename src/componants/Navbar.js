import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
   <nav className='navbar'>
     <div className="nav-center">
       <Link to='/'>
         <img src={logo} alt='' className="logo"/></Link>
     </div>
     <ul className='nav-links'>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/About'>About</Link></li>
     </ul>
   </nav>
  )
}

export default Home