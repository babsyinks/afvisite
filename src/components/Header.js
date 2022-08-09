import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = ()=>{
  const activeClassName = 'selected'

  return(
    <header>
        <nav className = 'nav'>
          <ul className='navList'>
            <li><NavLink to={`/`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>Home</NavLink></li>
            <li><NavLink to={`/about`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>About</NavLink></li>
            <li><NavLink to={`/vision_mission`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>Vision And Mission</NavLink></li>
          </ul>  
            <span className = 'logoWrapper'><img alt='logo' src='/images/afvilogo.jpg'></img><div>ABUJA FILM</div><div style = {{textAlign:'center'}}>VILLAGE</div></span>
          <ul className = 'navList'>
            <li><NavLink to={`/components`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>Components</NavLink></li>
            <li><NavLink to={`/contents`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>Contents</NavLink></li>
            <li><NavLink to={`/contact`} className={({ isActive }) =>(
              isActive ? activeClassName : undefined
              )}>Contact</NavLink></li>            
          </ul>
        </nav>
      </header>

  )
    
  }


export default Header