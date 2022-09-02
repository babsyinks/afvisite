import React,{useState,useEffect} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import DisplayMessage from './DisplayMessage'
import './Admin.css'

const Admin = ()=>{
  const[surname,setSurname] = useState('') 
  const[post,setPost] = useState('President')  
  const[picture,setPicture] = useState('')
  const[isDisabled,setIsDisabled] = useState(true)
  const[displayAlert,setDisplayAlert] = useState({display:false,cls:'',message:''})
  const navigate = useNavigate()
  useEffect(()=>{

    if(surname&&post&&picture){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }

  },[surname,post,picture])

  const onSetSurname = (e)=>{
    setSurname(e.target.value)
  }
  const onSetPost = (e)=>{
    setPost(e.target.value)
  }

  const onSetPicture = (e)=>{
    setPicture(e.target.files[0])

  }

  const goHome = ()=>{
      const auth = getAuth();
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        console.log(error.message)
      });
  }

  const setAlert = (cls,message)=>{
    setDisplayAlert({display:true,cls,message})
    setTimeout(()=>{
      setDisplayAlert({display:false,cls:'',message:''})
    },5000)
  }

  const handleSubmitVals = async(e)=>{
    const formData = new FormData()
    formData.set('surname',surname)
    formData.set('post',post)
    formData.set('picture',picture)
    try {  
 
        setAlert('success','New Contestant Successfully Added!!!')
  
  }
  catch (err) {
    setAlert('failed',err.error?err.error:'Oops Something Went Wrong!!!')
    
  }
   setSurname('')
   setPost('President')
   setPicture('')
  } 

    return(
      <div className="admin">
        {displayAlert.display && <DisplayMessage status = {displayAlert.cls}>{displayAlert.message}</DisplayMessage>}
        <h1>Add Pictures</h1>
          <div>
            <label htmlFor='surname'>Surname:</label><input type = "text" name = "surname" value = {surname} onChange = {onSetSurname} ></input>
          </div>
          <div>
            <label htmlFor='post'>Post:</label>
            <select name = "post" value ={post} onChange = {onSetPost}>
              <option value = "president" >President</option>
              <option value = "vice president">Vice President</option>
              <option value = "general secretary">General Secretary</option>
              <option value = "assistant general secretary">Assistant General Secretary</option>
              <option value = "national treasurer">National Treasurer</option>
              <option value = "national financial secretary">National Financial Secretary</option>
              <option value = "national social welfare officer">National Social/Welfare Officer</option>
              <option value = "national public relations officer">National Public Relations Officer</option>
              <option value = "national legal adviser">National Legal Adviser</option>
              <option value = "national internal auditor">National Internal Auditor</option>
              <option value = "chief whip">Chief Whip</option>
            </select>
          </div>
          <div>
            <label htmlFor='picture'>Upload Picture:</label><input type = "file" name = "picture" /* key = {resetFile} */  onChange = {onSetPicture}></input>
          </div>
          <div className = "buttons">
          <div data-tooltip = "Post Picture(s)">
            <button className = "roundButton" id="submit" type="button" disabled = {isDisabled} onClick = {handleSubmitVals}><i className="fas fa-plus"></i></button>
          </div>  
          <div data-tooltip = "Sign Out And Go To The Home Page">
            <button className = "roundButton" id="goHome" type="button" onClick = {goHome}><i className="fas fa-home"></i></button>
          </div> 
          </div>
      </div>
  )
    
}

export default Admin