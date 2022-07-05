import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/qaizenx.png'
import IMG2 from '../../assest/pugmarg.png'
import IMG3 from '../../assest/arc.png'
import IMG4 from '../../assest/airavat.png'
import IMG5 from '../../assest/global.png'
import IMG6 from '../../assest/craft.png'

const data = [
  {
    id: 1,
    image: IMG1,
    heading: "QaizenX",
    title:"QaizenX Manage your Surveys so you can Focus on Strategic Decisions",
    demo: 'https://www.qaizenx.com/fully-managed-solution/'
  },
  {
    id: 2,
    image: IMG2,
    heading: "PugMarg",
    title:"Child Safety Smart Id Card, PugMarg gives you the ability to track your Child 24x7. ",
    demo: 'http://pugmarg.in/'
  },
  {
    id: 3,
    image: IMG3,
    heading: "Arc Tech. & Inst.",
    title:"Arc Technologies & Institutions is one of the most prominent institutions.",
    demo: 'http://www.arctechs.in/'
  },
  {
    id: 4,
    image: IMG4,
    heading: "Airavatcs Pvt. Ltd.",
    title:"At Airavat, we believe in the power of technology in changing the world",
    demo: 'https://airavatcs.in/'
  },
  {
    id: 5,
    image: IMG5,
    heading: "Global Academy Nagpur",
    title:"We are based in Nagpur and offer intensive and quality training for MPSC or UPSC",
    demo: 'https://www.globalacademynagpur.com/'
  },
  {
    id: 6,
    image: IMG6,
    heading: "Craftgiri",
    title:"This company’s E-commerce is the buying and selling of goods and services",
    demo: 'https://craftgiri.business.site/'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, heading, demo}) => {
          return (
            <article key = {id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{heading}</h3>
            <h4>{title}</h4>
            <div className="portfolio__item-cta">
              <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio