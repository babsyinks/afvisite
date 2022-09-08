import React from 'react'

const Images = ({imgs:imagesArray}) => {
  return (
    <div>
      {imagesArray.map((url)=><img src={url} alt = 'from album'/>)}
    </div>
  )
}

export default Images