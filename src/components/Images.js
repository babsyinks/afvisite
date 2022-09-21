import React,{useState} from 'react'
import {useLocation} from 'react-router-dom';
import './Images.css'

const Images = () => {
  const location = useLocation()
  const imagesArray = location.state
  const [imgUrl,setImgUrl] = useState('')
  const[hidden,setHidden] = useState(true)
  let[currentIndex, setCurrentIndex] = useState(0)
  
  const displayFullImage = (url,i)=>{
    setCurrentIndex(i)
    setImgUrl(url)
    setHidden(false)
  } 

  const nextFullImage = ()=>{
    setCurrentIndex(++currentIndex)
    setImgUrl(imagesArray[currentIndex])
  }

  const prevFullImage = ()=>{
    setCurrentIndex(--currentIndex)
    setImgUrl(imagesArray[currentIndex])
  }

  return (
    <>
      <div className='imgContainer'>
        {imagesArray.map((url,i)=> (<div key={url} className='imgHolder'>
          <img src={url} alt = 'from album' onClick={displayFullImage.bind(null,url,i)}/>
        </div>) )}
      </div>  
     
      <div hidden = {hidden}>
        <div className='backdrop'>
          <div className='cancelWrap'>
            <i className="fa-solid fa-circle-xmark fa-2x cancel" onClick={()=>setHidden(true)}></i>
          </div>
          <div className='prevdiv'>
            {currentIndex > 0 && <i className="fa-solid fa-backward fa-2x" onClick={prevFullImage}></i>}
          </div>
          <div className='forediv'>
            <img src={imgUrl} alt='enlarged'/>
          </div> 
          <div className='nextdiv'>
            {currentIndex < imagesArray.length-1 && <i className="fa-solid fa-forward fa-2x" onClick={nextFullImage}></i>} 
          </div>
        </div>  
      </div>  
    </>

  )
}

export default Images