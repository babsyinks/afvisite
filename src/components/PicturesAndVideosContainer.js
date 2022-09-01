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

        </div>
    </div>
  )
}

export default PicturesAndVideosContainer