import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import './ComponentWrapper.css'
const ComponentWrapper = ({src,alt,desc,useButton,alternate}) => {
  if(alternate){
    return (
      <div id='compwrapper'>
        <div id='desc_section' className='boxes' style={{marginRight:'1.30rem'}}>
          {desc}
          {useButton && <Link to = {useButton.linkTo}><Button id={'button_pos'} text={useButton.text} additionalStyle={{marginTop:'2.5rem'}}/></Link> }
        </div>
        <img id='img_section' className='boxes' src={src} alt={alt} style={{marginRight:0}}></img>
    </div>
    )
  } 
  else{
    return (
      <div id='compwrapper'>
        <img id='img_section' className='boxes' src={src} alt={alt}></img>
        <div id='desc_section' className='boxes'>
          {desc}
          {useButton && <Link to = {useButton.linkTo}><Button id={'button_pos'} text={useButton.text} additionalStyle={{marginTop:'2.5rem'}}/></Link> }
        </div>
    </div>
    )
  }

}

export default ComponentWrapper