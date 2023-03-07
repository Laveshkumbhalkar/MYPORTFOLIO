import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <h2>
        {" "}
        <a href="#" className="footer_logo">
          Lavesh Kumbhalkar
        </a>
      </h2>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://in.linkedin.com/in/lavesh-kumbhalkar-533529115"
          target="_blank"
          rel="noopener noreferrer opener"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/lavesh_developer"
          target="_blank"
          rel="noopener noreferrer opener"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/LAVESHKUMBHALKAR"
          target="_blank"
          rel="noopener noreferrer opener"
        >
          <AiFillFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Lavesh Kumbhalkar. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer