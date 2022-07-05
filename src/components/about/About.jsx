import React from 'react'
import './about.css'
import ME from '../../assest/me-about.png'
import { FaAward } from 'react-icons/fa'
import { RiUserStarFill } from 'react-icons/ri'
import {FaProjectDiagram} from 'react-icons/fa'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card  ">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card  ">
              <RiUserStarFill className="about__icon" />
              <h5>Client</h5>
              <small>10+ Domestics</small>
            </article>
            <article className="about__card  ">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>I am working as a Software Developer in Great Place IT Services. I am Excellent in the field of Software Developer to deliver to the best of my ability. Sound Knowledge of using HTML, CSS, JAVASCRIPT, PHP, MySQL or many more. My goal is to get job in reputed companies for effective contribution to an organization for a bright and rewarding career</p>

          <a href="#contact" className = "btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About