import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Landing Page Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design From Sketch</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single Page Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>All Type of Web Design</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX/Graphic</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Graphic Designer</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customer Analysis</p>
            </li>

          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamic Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Payment Getaway</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Development</p>
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services