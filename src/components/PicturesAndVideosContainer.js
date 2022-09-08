import React from 'react'
import './PicturesAndVideosContainer.css'
import Button from './Button'
import {Link} from 'react-router-dom'
const PicturesAndVideosContainer = () => {
  return (
    <div className='picsvidswrapper'>
        <div className='content_boxes'>
          <img src={`/images/photocollage.jpg`} alt = 'banner for this container' />
          <Link to = '/image_folders'><Button id={'button_pos'} text='View Images' additionalStyle={{marginTop:'1.5rem'}} additionalClass='content_btn'/></Link>
        </div>
        <div className='content_boxes'>
          <video autoPlay loop >
            <source src='/videos/camvideo.mp4' type='video/mp4'></source>
            Your browser does not support the video tag.
          </video>
          <Link to = '/videos'><Button id={'button_pos'} text='Watch Videos' additionalStyle={{marginTop:'1.5rem'}} additionalClass='content_btn'/></Link>
        </div>
    </div>
  )
}

export default PicturesAndVideosContainer