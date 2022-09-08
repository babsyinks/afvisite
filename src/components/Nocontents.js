import React from 'react'
import ComponentWrapper from './ComponentWrapper'
import './Nocontents.css'

const Nocontents = ({content}) => {
    const contents = `There is no ${content} yet.Check back soon.`
  return (
    <div id='contents'>
       <ComponentWrapper src={'/images/content.jpg'} alt='content' desc={contents}/> 
    </div>
  )
}

export default Nocontents