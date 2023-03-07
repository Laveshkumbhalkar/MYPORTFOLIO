import React from 'react'
import CV from "../../assest/7d17f6f075147e46beb0d072c184fd14fd08acf2.pdf";

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA