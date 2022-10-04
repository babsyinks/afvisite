import React,{useState,useEffect} from 'react'
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Nocontents from './Nocontents'
import './ImageFolders.css' 

const ImageFolders = () => {
  const [folders,setFolders] = useState([])
  const [foldersAvailable,setFoldersAvailable] = useState(true)
  const [imagesArray,setImagesArray] = useState([])
  const [loading, setLoading] = useState(true)
  const commonPath = 'users/y8YRMieSsGZsQw7AQRHxTJGuOoY2'
  const storage = getStorage()
  const listRef = ref(storage, commonPath);
  const navigate = useNavigate()

  useEffect(()=>{
    listAll(listRef)
    .then((res) => {
      if(res.prefixes.length > 0){
        const folderNames = []
        res.prefixes.forEach((folderRef) => {
          folderNames.push(folderRef.name)
        });  
          setFolders(folderNames)
          setLoading(false)
      }
      else{
        setFoldersAvailable(false)
        setLoading(false)
      }
    }).catch((error) => {
      console.log(error)
      
    });
    //eslint-disable-next-line
  },[])

  useEffect(()=>{
    if(imagesArray.length>0){
      navigate('/images', {state:imagesArray})
    }
  },[imagesArray,navigate])

  const loadImages = (folder)=>{
    const path = `${commonPath}/${folder}`
    const listRef = ref(storage, path);
    listAll(listRef)
    .then((res) => {
      if(res.items.length>0){
        setLoading(true)
          const Arr = []
          res.items.forEach((itemRef) => {
           Arr.push(getDownloadURL(ref(storage, `${path}/${itemRef.name}`)))
       }); 
       
       Promise.all(Arr)
       .then((results)=>{
        setImagesArray(results)
        setLoading(false)
       })
       .catch(err=>console.log(err))
      }
/*   */
    }).catch((error) => {
      console.log(error)
      
    });
  }
  if(loading){
    return (
          <div id='loaderWrapper'>
            <ReactLoading type='spin' color='rgb(62, 0, 120)' height={'20%'} width={'20%'} /> 
          </div>
          )
  }
  else if(!foldersAvailable){
    return <Nocontents content={'image'}/>
  }
  else if(folders.length>0){
    return (
      <div id = 'imageWrapper'>
        {folders.map((folder)=>(
          <div className='imgWrapperOuter' key={folder}>
            <div className='imgWrapperInner' onClick={loadImages.bind(null,folder)}>
              <div className='folder'>
                <h2>{folder}</h2>
                <div>AFVI Album</div>           
              </div>
              <div className='folder_back'>
                <h2>Click To View Images </h2>
              </div>
            </div>
        </div>  
        ))}
      </div>
    )    
  }

}
export default ImageFolders