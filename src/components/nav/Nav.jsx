import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
 const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === 'about' ? 'active' :''} ><AiOutlineUser /></a>
      <a href="#experience"onClick={() => setActiveNav('#experiencet')} className={activeNav === 'experience' ? 'active' :''} ><MdWorkOutline /></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === 'portfolio' ? 'active' :''} ><RiServiceLine /></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === 'contct' ? 'active' :''} ><AiOutlineMessage/></a>

    </nav>
  )
}

export default Nav