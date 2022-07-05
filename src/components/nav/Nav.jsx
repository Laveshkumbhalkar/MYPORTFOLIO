import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
// import {ImBooks} from 'react-icons/im'
import {MdDesignServices} from 'react-icons/md'
import {MdContactPage} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPage /></a>
    </nav>
  )
}

export default Nav