import React from 'react'
import './Videos.css'
import {useLocation} from 'react-router-dom';

const Videos = () => {
  const location = useLocation()
  const videoLinks = location.state
  return (
    <div className='vidContainer'>
    {videoLinks.map((url,i)=> (<div key={url} className='vidHolder'>
      <iframe src={url} 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>) )}
  </div> 
  )
}

export default Videos