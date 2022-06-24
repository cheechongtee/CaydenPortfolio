import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact_option'>
            <AiOutlineMail />
              <h4>Email</h4>
             
              <a href="mailto:cheechongtee0228@gmail.com">Send Now</a>
            </article>
            <article className='contact_option'>
            <BsWhatsapp />
              <h4>Whatsapp</h4>
              <h5>+601110689788</h5>
             <a href="https://wa.me/601110689788">Send Now</a>
            </article>
            <article className='contact_option'>
            <BiPhoneCall/>
              <h4>Call</h4>
              <h5>011-10689788</h5>
              <a href="tel:+601110689788">Call Now</a>
            </article>

            
        </div>
       
      </div>
    </section>
  )
}

export default contact