import React/* , {useState} */ from 'react'
import ComponentWrapper from './ComponentWrapper'
import './Contents.css'
const Contents = () => {
  /* const[contentsArr,setContentsArr] = useState([]) */
  const contentsArr = []
  const contents = contentsArr.length?'Click The Button Below To Load Contents':'There is no video or picture yet.Check back soon.'
  const useButtonObj = {linkTo:'',text:'Load Contents'}
  return (
    <div id='contents'>
      <ComponentWrapper src={'/images/content.jpg'} alt='content' desc={contents} useButton = {contentsArr.length?useButtonObj:null}/>
    </div>
    
  )
}

export default Contents