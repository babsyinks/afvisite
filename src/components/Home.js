import React from 'react'
import ComponentWrapper from './ComponentWrapper'
import './Home.css'
const Home = () => {
  const missionvision = `We are highly focused proffessionals. We have a grand vision we hope you will share with us. We will like to take you 
  on a journey with us as we build the film village of our dreams. We are on a mission to bring this dream to reality. Hang in there with us;
  we promise to make it a fun-filled experience for everyone on this journey with us!
  `

  const component_desc = `Our components are the core building blocks that the film village depends on. Our components are numerous, we have over
  50 components. All components are important and form key cogs that drive the film village project forward. We encourage you to take a deep dive 
  into our component page, and check out all the components we have to offer, perhaps some may be of interest to you.
  `

  const contact_us = `Still have questions? Please do not hesitate to reach out to us. We are available always on multiple communication channels.
  You can also visit our office at our designated address that can be found on our contact page. We look foraward to hearing from you very soon.
  
  `
  return (
    <div>
        <div id='bodyImage' className='x-axis'>
          <div id='introduction'>
            <div className='introduction_contents no_cap'>What Are We Doing?</div>
            <div className='introduction_contents cap'>WE ARE BUILDING A ONE-STOP SHOP FOR YOUR ENTERTAINMENT AND FILM MAKING NEEDS.</div>
          </div>
        </div> 
        <div className='mkt_group'>
          <h1>Why You Should Invest With Us</h1>
          <div className='mkt_comps'>
            <div className='mkt_divs first'>
              <div><i className="fa-solid fa-person-circle-check fa-4x unique"></i></div>
              <h2>Unique Offering</h2>
              <div>We offer a chance for you to be a part of something unique; the chance to build the first ever film village in Africa 
                on a massive land of over 5000 hectares in size. WIth over 50 components, there is something for everyone.
              </div>
            </div>
            <div className='mkt_divs second'>
              <div><i className="fa-solid fa-naira-sign fa-4x naira"></i></div>
              <h2>Profitable Investment</h2>
              <div>Nollywood is in the top 3 of film industries in the world in terms of quantity and revenue.The film village aims to increase 
                the quality, quantity and revenue stream even further. This industry is a goldmine and investors can be rest assured of Profitable
                returns on investments.
              </div>
            </div>
            <div className='mkt_divs third'>
              <div><i className="fa-solid fa-file-signature fa-4x govt"></i></div>
              <h2>Government Support</h2>
              <div>Abuja Film Village is government owned, hence, investors can be assured of support from the government for all their investments.
                Investing with us can help establish a relationship between investors and the government, which can be mutually beneficial.
              </div>
            </div>
          </div>
        </div>
        <ComponentWrapper src={'/images/scrabble-mission-vision.jpg'} alt={'mission and vision in scrabble form'} desc={missionvision} useButton={{text:'Learn More',linkTo:'/vision_mission'}}/>
        <ComponentWrapper src={'/images/cog-wheels.jpg'} alt={'components of AFVI briefly'} desc={component_desc} useButton={{text:'More Components',linkTo:'/components'}} alternate={true}/>
        <ComponentWrapper src={'/images/contact-us-call.png'} alt='call us' desc={contact_us} useButton={{text:'Contact Us',linkTo:'/contact'}}/>
        
    </div>
  )
}

export default Home