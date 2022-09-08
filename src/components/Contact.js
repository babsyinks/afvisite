import React,{useState,useEffect} from 'react'
import ComponentWrapper from './ComponentWrapper'
import Map from './Map'
import Map1 from './Map1'
import './Contact.css'

const Contact = () => {
  const contactus = `We look forward to hearing from you, please feel free to reach out to us
  through any of our available channels below. We are happy to respond to your inquiries, and we are
  open to your suggestions. We welcome investments into this grand project of ours; if you are 
  looking for a great project to invest in, why don't you invest with us? We will make it worth your 
  while!
  `

  const [renderSecondMap, setRenderSecondMap] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setRenderSecondMap(true)
    }, 3000);
  },[])
  return (
    <div id='contact'>
      <ComponentWrapper src={`/images/contact-us.jpg`} alt='contact us' desc={contactus}/>
      <div id='contactgroup'>
        <div className='contactoptions'>
          <div><i className="fa-solid fa-phone fa-5x phone"></i></div>
          <div className='contactdesc'>We are just a phone call away.Please call us on the number below, we won't keep you waiting.</div>
          <div className='contact_medium'><a className='phn' href='tel:08051750010'><span>Click to call us on this number: 08051750010</span></a> </div>
        </div>
        <div className='contactoptions'>
        <div><i className ="fa-solid fa-envelope fa-5x envelope"></i></div>
          <div className='contactdesc'>You can send us an email on our designated email address below. We will surely reply your mail shortly.</div>
          <div className='contact_medium'><a className='env' href='mailto:abujafilmvillage@gmail.com'><span>Click to mail us on: <span className='wordBreak'>abujafilmvillage@gmail.com</span></span></a></div>
        </div>
        <div className='contactoptions'>
        <div><i className="fa-brands fa-whatsapp fa-5x whatsapp"></i></div>
          <div className='contactdesc'>You can chat with us on the WhatsApp number below.You can expect instant response from us. </div>
          <div className='contact_medium'><a className='whts' href='https://api.whatsapp.com/send?phone=2348051750010' target={'blank'}><span>Click to chat with us on WhatsApp</span></a></div>
        </div>
        
      </div>   
     <div className='locationWrapper'>
        <div className='locateus'><i className="fa-solid fa-location-arrow fa-5x location"></i> <div className='welc'>You are welcome to visit our main office located at</div> <div> <code className='addr'>APDC Building,Plot 1329, Cadastral Zone A0, Behind AGIS, Area 11, Garki, Abuja.</code></div></div>
      </div>
     <Map1/>
     {renderSecondMap && (<>
     <div className='locationWrapper'>
        <div className='locateus'><i className="fa-solid fa-location-arrow fa-5x location"></i> <div className='welc'>You are welcome to visit our branch office located at</div> <div> <code className='addr'>Cyprian Ekwensi Center For Arts And Culture, 2009 Awka Street, Area 10, Garki, Abuja.</code></div></div>
      </div>
     <Map/>     
     </>)}

    </div>
  )
}

export default Contact