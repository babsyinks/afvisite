import React from 'react'
import './Home.css'
const Home = () => {
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
        <div>Core Components discover more...</div>
    </div>
  )
}

export default Home