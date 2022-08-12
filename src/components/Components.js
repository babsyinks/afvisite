import React from 'react'
import componentsData from '../componentdata/componentdata'
import Comp from './Comp'
import './Components.css'
const Components = () => {
  
  return (
    <div className='compWrap'>
      {componentsData.map(obj=>{
        return (
          <Comp title={obj.title} image={obj.image} description={obj.description} />
        )
      })}
    </div>
  )
}

export default Components