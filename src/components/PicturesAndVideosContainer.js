import React from 'react'
import './PicturesAndVideosContainer.css'
import Button from './Button'
import {Link} from 'react-router-dom'
const PicturesAndVideosContainer = () => {
  return (
    <div className='picsvidswrapper'>
        <div>
          <img src={`/images/photocollage.jpg`} alt = 'banner for this container' />
          <Link to = '/images'><Button id={'button_pos'} text='View Images' additionalStyle={{marginTop:'2.5rem'}}/></Link>
        </div>
        <div>
          <video autoPlay loop>
            <source src='/videos/camvideo.mp4' type='video/mp4'></source>
            Your browser does not support the video tag.
          </video>
          <Link to = '/videos'><Button id={'button_pos'} text='Watch Videos' additionalStyle={{marginTop:'2.5rem'}}/></Link>
        </div>
    </div>
  )
}

export default PicturesAndVideosContainer