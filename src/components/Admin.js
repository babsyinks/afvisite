import React,{useState,useEffect} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, listAll, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import Progress from './Progress';
import DisplayMessage from './DisplayMessage'
import './Admin.css'

const Admin = ({uid})=>{
  
  const[pictures,setPictures] = useState('')
  const [folderEmpty, setFolderEmpty] = useState(true)
  const[isDisabled,setIsDisabled] = useState(true)
  const[displayAlert,setDisplayAlert] = useState({display:false,cls:'',message:''})
  const navigate = useNavigate()
  const storage = getStorage();
  const newFolder = "Create New Folder"
  const existingFolder = "Use Existing Folder"
  const [folderCat, setFolderCat] = useState('')
  const [newFolderName, setNewFolderName] = useState('')
  const [chosenFolder, setChosenFolder] = useState('')
  const [folderContents, setFolderContents] = useState([])
  const [uploading, setUploading] = useState(false)
  const [progressStatus, setProgressStatus] = useState(0)
  const [currentFileUpload,setCurrentFileUpload] = useState('')
  const commonPath = `users/${uid}`
  let counter = 0
// Create a reference under which you want to list
const listRef = ref(storage, commonPath);

useEffect(()=>{
// Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      
      if(res.prefixes.length > 0){
        setFolderEmpty(false)
        const folderNames = []
        res.prefixes.forEach((folderRef) => {
          folderNames.push(folderRef.name)
        });  
        setFolderContents(folderNames) 
        if(!chosenFolder) {
          setChosenFolder(res.prefixes[0].name)  
        }
          
      }
/*       res.items.forEach((itemRef) => {

        console.log(itemRef) 
       }); */
    }).catch((error) => {
      console.log(error)
      setAlert('failed','Upload Failed,Check Your Network Or Try Again Later!!!')
    });

  },[listRef])

  useEffect(()=>{
    if(((folderContents.length > 0 && folderCat === existingFolder) || (newFolderName.length > 0 && (folderCat === newFolder || folderEmpty))) && pictures.length > 0){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }
  },[folderContents,newFolderName,pictures,folderCat,folderEmpty])


  const onSetPictures = (e)=>{
    const filelist = e.target.files
    const ArrayOfPics = Array.from(filelist)
    const imageValidate = ArrayOfPics.every(file=>file.type.search(/image\//i)!== -1)
    if(!imageValidate){
      return setAlert('failed', 'Only Images should be uploaded!')
    }
    setPictures(ArrayOfPics)
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
    const upload = (file)=>{
      setUploading(true)
      setCurrentFileUpload(file.name)
      const image_folder = folderCat === existingFolder?chosenFolder:newFolderName
      const storageRef = ref(storage, `${commonPath}/${image_folder}/${file.name}`);
      console.log(`${commonPath}/${image_folder}/${file.name}`)

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressStatus(progress)
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              console.log('unknown state')
          }
        }, 
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log("you are not permitted to carry out this upload")
              break;
            case 'storage/canceled':
              // User canceled the upload
              console.log("upload cancelled")
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              console.log("This error can't be determined")
              break;
            default:
              console.log('Unknown Error')
          }
        }, 
        () => {
          counter++
          if(pictures[counter]){
            upload(pictures[counter])
          }
          else{
            counter = 0
            setAlert('success','Uploading Process Completed')
            setTimeout(()=>{
              setUploading(false)
            },5500)
            
          }
          // Upload completed successfully, now we can get the download URL
      /*     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          }); */
        }
      );      
    }
    upload(pictures[0])
  } 

  const handleFolderCategory = e=>{
    setFolderCat(e.target.value)
  }

  const handleChosenFolder = e =>{
    setChosenFolder(e.target.value)
  }

  const handleSetNewFolderName = e =>{
    setNewFolderName(e.target.value)
  }

  if(uploading){
    return (
      <div className='progress_wrapper'>
        <div className='progress'>
        {displayAlert.display && <DisplayMessage status = {displayAlert.cls}>{displayAlert.message}</DisplayMessage>}
           <Progress progress={progressStatus}/>
           <div style={{textAlign:'center'}}>{`Uploading ${currentFileUpload} ...... ${progressStatus}% Done.`}</div>
        </div>
       
      </div>
    )
     
  }

    return(
      <div className="admin">
        
        {displayAlert.display && <DisplayMessage status = {displayAlert.cls}>{displayAlert.message}</DisplayMessage>}
        <h1>Add Pictures</h1>
        
        {!folderEmpty && (
          <div>
              <label htmlFor="radio_button">Use Existing Folder</label>
              <input type="radio" id="radio_button_existing" name="folder_choice" value = {existingFolder} checked = {folderCat === existingFolder} onChange = {handleFolderCategory}></input>
              <label htmlFor="radio_button">Create New Folder</label>
              <input type="radio" id="radio_button_new" name="folder_choice" value = {newFolder} checked = {folderCat === newFolder} onChange = {handleFolderCategory}></input>
          </div>
            
        )}
        
          {((folderCat === newFolder) || folderEmpty) && (
          <div>
            <label htmlFor='newFolder'>Give The New Folder A Name:</label><input type = "text" name = "newFolder" maxLength={20} value = {newFolderName} onChange = {handleSetNewFolderName} ></input>
          </div>
          )}
          {folderCat === existingFolder && (
            <div>
              <label htmlFor='folderchosen'>Choose A Folder To Upload Image(s):</label>
              <select name = "folderchosen" value = {chosenFolder} onChange = {handleChosenFolder}>
                {folderContents.map((folderName)=> <option key={folderName} value={folderName}>{folderName}</option>)} 
              </select>
            </div>            
          )}

          <div>
            <label htmlFor='pictures'>Upload Pictures:</label><input type = "file" name = "pictures" /* key = {resetFile} */  onChange = {onSetPictures} multiple></input>
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