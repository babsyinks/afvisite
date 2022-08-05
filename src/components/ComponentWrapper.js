import React from 'react'
import './ComponentWrapper.css'
const ComponentWrapper = ({src,alt,desc}) => {
  return (
    <div id='compwrapper'>
      <img id='img_section' className='boxes' src={src} alt={alt}></img>
      <div id='desc_section' className='boxes'>{desc}</div>
  </div>
  )
}

export default ComponentWrapper