import React from 'react'
import './About.css'
import ComponentWrapper from './ComponentWrapper'
const About = () => {
  const desc = `Abuja Film Village (AFV) is a Nigerian company, and a subsidiary of Abuja Investments Company Limited (AICL), birthed by the Federal Capital Territory Administration (FCTA), 
  through a Public Private Partnership (PPP) initiative, to make the city of Abuja, and by extension Nigeria, a center 
  of film making and entertainment excellence. We are building a world class film village that will
  have over 50 components. Some of the key components include film studios, music studios, amusement and theme 
  parks, IMAX 3D and 4D theaters, etc.
  We have over 5000 hectares of land in the Kusaki-Yanga District of the FCT, and we seek investments on this vast area
  of land. With a hardworking, committed and focused management and staff, we have what it takes to build a world class
  film village with all its accompanying components.
  
  `
  return (
    <ComponentWrapper src={'/images/aboutus.jpg'} alt='aboutus' desc={desc}/>
  )
}

export default About