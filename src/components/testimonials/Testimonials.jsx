import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assest/avatar1.jpg'
import AVTR2 from '../../assest/avatar2.jpg'
import AVTR3 from '../../assest/avatar3.jpg'
import AVTR4 from '../../assest/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Vicky Gawande',
    position: 'CEO',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing Modi, suscipit! Sequi doloremque, dolorem sint, velit architecto impedit quos, maiores repudiandae provident assumenda culpa asperiores quae eum corrupti nam iusto repellendus",
  },
  {
    avatar: AVTR2,
    name: 'Vicky Gawande',
    position: 'CEO',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing Modi, suscipit! Sequi doloremque, dolorem sint, velit architecto impedit quos, maiores repudiandae provident assumenda culpa asperiores quae eum corrupti nam iusto repellendus",
  },
  {
    avatar: AVTR3,
    name: 'Vicky Gawande',
    position: 'CEO',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing Modi, suscipit! Sequi doloremque, dolorem sint, velit architecto impedit quos, maiores repudiandae provident assumenda culpa asperiores quae eum corrupti nam iusto repellendus",
  },
  {
    avatar: AVTR4,
    name: 'Vicky Gawande',
    position: 'CEO',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing Modi, suscipit! Sequi doloremque, dolorem sint, velit architecto impedit quos, maiores repudiandae provident assumenda culpa asperiores quae eum corrupti nam iusto repellendus",
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}className="container testimonials__container">

        {
          data.map(({ avatar, name, position, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=" " />
                </div>
                <h5 className="client__name">{name}</h5>
                <h4 className="client__position">{position}</h4>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>

  )
}

export default Testimonials