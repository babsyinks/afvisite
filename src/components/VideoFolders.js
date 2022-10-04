import React,{useState,useEffect} from 'react'
import './VideoFolders.css'
import Nocontents from './Nocontents'
import {default as videofolders} from '../linksData/videoLinksDetails';
import { useNavigate } from 'react-router-dom';

const VideoFolders = () => {
const [linksArr,setLinksArr] = useState([])
const navigate = useNavigate()

useEffect(()=>{
  if(linksArr.length>0){
    navigate('/videos',{state:linksArr})
  }
},[linksArr,navigate])

const openVideoFolder = (links)=>{
  console.log(links)
  setLinksArr(links)
}

if(videofolders.length>0){
  return (
    <div id = 'videoWrapper'>
      {videofolders.map((folder,i)=>(
      <div className='vidWrapperOuter' key={i}>
        <div className='vidWrapperInner' onClick={openVideoFolder.bind(null,folder.links)}>
          <div className='folder_vid'>
            <h2>{folder.name.toUpperCase()}</h2>
            <div>AFVI Album</div>           
          </div>
          <div className='folder_vid_back'>
            <h2>Click To View Videos </h2>
          </div>
        </div>
    </div>         
      )

      )}  
 
  </div>
  )  
}
else{
  return <Nocontents content={'video'}/>
}

}

export default VideoFolders