import React from 'react'
import ComponentWrapper from './ComponentWrapper'
import './VisionAndMission.css'
const VisionAndMission = () => {
  const vision =`Our vision is to make the city of Abuja, and Nigeria by extension, the world center of film and entertainment excellence;
  and also to become Africa’s premier Holiday Resort.`
  const mission = `Our mission statement is to raise the professional know-how of the Nigerian film industry in all its ramifications, through our function as a production company.
  We also want to improve on the film industry’s capacity to earn more at home and foreign exchange from abroad.
  We want to harness the untapped talent bank which abounds in Nigeria to its full capacity, this will take filmmaking in Nigeria to greater heights, with Nigeria taking a place of pride among top filmmaking nations.
  We are on a mission to make Abuja become the beehive of film and entertainment activities from all over the world, as well as the premier Holiday Resort in the African sub-region. This has the added advantage of creating job opportunities for Nigerian citizens and also helps in revenue generation.
  We will work hard to provide facilities where filmmakers from all over the world can come for pre-production, production, post-production, and the premiering of their films.`
  return (
    <div className='vm'>
      <h2>VISION</h2>
      <ComponentWrapper src={'/images/vision.jpg'} alt='vision in words' desc={vision}/>
      <h2>MISSION</h2>
      <ComponentWrapper src={'/images/mission.jpg'} alt='mission statement' desc={mission}/>
      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
    </div>

  )
}

export default VisionAndMission