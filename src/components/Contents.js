import React/* , {useState} */ from 'react'
import ComponentWrapper from './ComponentWrapper'
import './Contents.css'
const Contents = () => {
  /* const[contentsArr,setContentsArr] = useState([]) */
  const contentsArr = []
  const contents = contentsArr.length?'':'There is no video or picture yet.Check back soon.'
  return (
    <div id='contents'>
      <ComponentWrapper src={'/images/content.jpg'} alt='content' desc={contents}/>
    </div>
    
  )
}

export default Contents