import React,{useState} from 'react'
import {useLocation} from 'react-router-dom';
import './Images.css'
const Images = () => {
  const location = useLocation()
  const imagesArray = location.state
  const [imgUrl,setImgUrl] = useState('')
  const[hidden,setHidden] = useState(true)
  const displayFullImage = (url)=>{
    setImgUrl(url)
    setHidden(false)
    
  } 
  return (
    <>
      <div className='imgContainer'>
        {imagesArray.map((url)=> (<div key={url} className='imgHolder'>
          <img src={url} alt = 'from album' onClick={displayFullImage.bind(null,url)}/>
        </div>) )}
      </div>  
     
      <div hidden = {hidden}>
        <div className='backdrop'>
          <div className='cancelWrap'>
            <i className="fa-solid fa-circle-xmark fa-2x cancel" onClick={()=>setHidden(true)}></i>
          </div>
          <div className='forediv'>
            <img src={imgUrl} alt='enlarged'/>
          </div> 
        </div>  
      </div>  
    </>

  )
}

export default Images