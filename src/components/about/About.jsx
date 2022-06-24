import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
        <img src={ME} alt="About Image" /> 
      </div>
      </div>
    

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>3+ years</small>
           
          </article>

          <article className='about__card'>
          <FaUser className='about__icons'/>
            <h5>Client</h5>
            <small>sohai</small>
        
          </article>

          <article className='about__card'>
          <FaFolder className='about__icons'/>
            <h5>Project</h5>
            <small>80complete</small>
  
          </article>
        </div>
        <p>
        Microsoft Word is a word processing software developed by Microsoft. It was first released on October 25, 1983, under the name Multi-Tool Word for Xenix systems
        </p>

        <a href='contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
   </section>
  )
}

export default About