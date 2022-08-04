import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = ()=>(
    <header>
        <nav className = 'nav'>
          <ul className='navList'>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/mission_vision`}>Mission And Vision</Link></li>
            <li><Link to={`/about`}>About</Link></li>
          </ul>  
            <span className = 'logoWrapper'><img alt='logo' src='/images/afvilogo.jpg'></img><div>ABUJA FILM</div><div style = {{textAlign:'center'}}>VILLAGE</div></span>
          <ul className = 'navList'>
            <li><Link to={`/components`}>Components</Link></li>
            <li><Link to={`/contents`}>Contents</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>            
          </ul>
        </nav>
      </header>
)


export default Header