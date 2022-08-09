import React from 'react'
import ComponentWrapper from './ComponentWrapper'
import Map from './Map'
import './Contact.css'

const Contact = () => {
  const contactus = `We look forward to hearing from you, please feel free to reach out to us
  through any of our available channels below. We are happy to respond to your inquiries, and we are
  open to your suggestions. We welcome investments into this grand project of ours; if you are 
  looking for a great project to invest in, why don't you invest with us? We will make it worth your 
  while!
  `
  return (
    <>
      <ComponentWrapper src={`/images/contact-us.jpg`} alt='contact us' desc={contactus}/>
      <div id='contactgroup'>
        <div className='contactoptions'>
          <div><i className="fa-solid fa-phone fa-5x phone"></i></div>
          <div className='contactdesc'>We are just a phone call away.Please call us on the number below, we won't keep you waiting.</div>
          <div><a className='phn' href='tel:08051750010'>Click to call us on this number: 08051750010</a> </div>
        </div>
        <div className='contactoptions'>
        <div><i className ="fa-solid fa-envelope fa-5x envelope"></i></div>
          <div className='contactdesc'>You can send us an email on our designated email address below. We will surely reply your mail shortly.</div>
          <div><a className='env' href='mailto:abujafilmvillage@gmail.com'>Click to mail us on:abujafilmvillage@gmail.com</a></div>
        </div>
        <div className='contactoptions'>
        <div><i className="fa-brands fa-whatsapp fa-5x whatsapp"></i></div>
          <div className='contactdesc'>You can chat with us on the WhatsApp number below.You can expect instant response from us. </div>
          <div><a className='whts' href='https://api.whatsapp.com/send?phone=2348051750010' target={'blank'}>Click to chat with us on WhatsApp</a></div>
        </div>
      </div>   
     <Map/>
    </>
  )
}

export default Contact