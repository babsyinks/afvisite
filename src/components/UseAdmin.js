import React,{useState} from 'react'
import Admin from './Admin'
import './UseAdmin.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider, deleteUser  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjOnSmWyAu6eqFZBEoW_pdRd2_1RVaOrc",
  authDomain: "afviwebsite.firebaseapp.com",
  projectId: "afviwebsite",
  storageBucket: "afviwebsite.appspot.com",
  messagingSenderId: "144576559241",
  appId: "1:144576559241:web:35f517d35a0a717b7bae58",
  measurementId: "G-MDQ5LZTQD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const UseAdmin = () => { 
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const acceptedEmail = 'abujafilmvillage@gmail.com'
    const [email,setEmail] = useState('')
    const [returnedEmail, setReturnedEmail] = useState('')
    const [uid,setUid] = useState('')
    const handleInputChange = e=>{
        setEmail(e.target.value)
    }
    const handleSubmit = e=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setReturnedEmail(user.email)
            setUid(user.uid)
            if(user.email !== acceptedEmail){
                 const user = auth.currentUser;

                deleteUser(user).then(() => {
                
                }).catch((error) => {
                    console.log(error.message)
                });                
            }
            
        }).catch((error) => {
           console.log(error.message) 
        });
    }
    if(acceptedEmail !== returnedEmail){
        return (
            <div id='useAdmin'>
                <h2>Enter Your Email Below And Submit</h2>
            <label>Enter Email</label><input type='email' onChange={handleInputChange} value = {email}></input> 
            { email === acceptedEmail && <button onClick={handleSubmit}>Submit</button>}
            </div>
            
        )        
    }
    else{
        return <Admin uid = {uid}/>
    }

}

export default UseAdmin