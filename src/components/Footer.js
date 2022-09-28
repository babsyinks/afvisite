import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
    <div className='footer'>
        <span>
            &copy; {new Date().getFullYear()} Abuja Film Village
        </span>
        <span className='socials'>
            <a href='/' target= 'blank'><span><i className = "fa-brands fa-facebook-f"></i></span></a>
            <a href='https://twitter.com/ABUJAFILMVLG' target= 'blank'><span><i className = "fa-brands fa-twitter"></i></span></a>
            <a href='https://www.instagram.com/abujafilm/' target= 'blank'><span><i className = "fa-brands fa-instagram"></i></span></a>
            <a href='https://www.youtube.com/channel/UC6yJhy2XOwL9riabxluuzEA' target= 'blank'><span><i className = "fa-brands fa-youtube"></i></span></a>           
        </span>

    </div>
  )
}

export default Footer