import React from 'react'
import './Button.css'
const Button = ({id,text,onClick,additionalStyle,additionalClass}) => {
  return (
    <button id={id} className={additionalClass} onClick = {onClick} style={additionalStyle}>{text}</button>
  )
}

export default Button