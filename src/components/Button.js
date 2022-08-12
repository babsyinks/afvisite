import React from 'react'
import './Button.css'
const Button = ({id,text,onClick,additionalStyle}) => {
  return (
    <button id={id} onClick = {onClick} style={additionalStyle}>{text}</button>
  )
}

export default Button