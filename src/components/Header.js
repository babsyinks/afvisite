import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Header.css'
const Header = ()=>{
  const[windowWidth,setWindowWidth] = useState(window.innerWidth)
  
  useEffect(()=>{
    const updateWidth = ()=>{
     setWindowWidth(window.innerWidth)
    } 
    window.addEventListener('resize',updateWidth)
    return ()=> window.removeEventListener('resize',updateWidth)
  },[])

  const activeClassName = 'selected'

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 0.8em 0',
      fontSize: '1rem'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      padding:'0.8rem'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
  if(windowWidth < 1000){
    return (
      <div className='mobWrapper'>
        <Menu  styles={styles} >
              <li><NavLink to={`/`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i className="fa-solid fa-house-chimney menu-items"></i><span>Home</span></NavLink></li>
              <li><NavLink to={`/about`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i className="fa-solid fa-person-circle-question menu-items"></i><span>About</span></NavLink></li>
              <li><NavLink to={`/vision_mission`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i className="fa-solid fa-glasses menu-items"></i><span>Vision And Mission</span></NavLink></li>
              <li><NavLink to={`/components`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i class="fa-solid fa-gears menu-items"></i><span>Components</span></NavLink></li>
              <li><NavLink to={`/contents`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i className="fa-solid fa-photo-film menu-items"></i><span>Contents</span></NavLink></li>
              <li><NavLink to={`/contact`} className={({ isActive }) =>(
                isActive ? activeClassName : undefined
                )}><i className="fa-solid fa-address-book menu-items"></i><span>Contact</span></NavLink></li>            
        </Menu>    
        <div className='logoDiv'>
          <span className = 'logoWrapper'><img alt='logo' src='/images/afv.png'></img><div>ABUJA FILM</div><div style = {{textAlign:'center'}}>VILLAGE</div></span> 
        </div>
      </div>

    )
  }
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
            <span className = 'logoWrapper'><img alt='logo' src='/images/afv.png'></img><div>ABUJA FILM</div><div style = {{textAlign:'center'}}>VILLAGE</div></span>
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