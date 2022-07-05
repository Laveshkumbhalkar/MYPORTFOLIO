import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com/in/lavesh-kumbhalkar-533529115"  target="_blank" rel="noopener noreferrer opener"><FaLinkedin /></a>
        <a href="https://www.instagram.com/lavesh_kitkat"  target="_blank" rel="noopener noreferrer opener"><FiInstagram /></a>
        <a href="https://www.facebook.com/LAVESHKUMBHALKAR"  target="_blank" rel="noopener noreferrer opener"><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocials