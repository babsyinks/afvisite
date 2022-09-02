import React from 'react'
import './DisplayMessage.css'
const DisplayErrorMessage = ({children,status})=>{
    return(
     <div className = {status}>
        {children}
    </div>       
    )
}

export default DisplayErrorMessage