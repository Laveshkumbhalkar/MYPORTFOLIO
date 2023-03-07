import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assest/avatar1.jpeg'
import AVTR2 from '../../assest/avatar22.jpg'
import AVTR3 from '../../assest/avatar23.jpeg'
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
    name: "Vicky Gawande",
    position: "CEO(ARC)",
    review:
      "I had the pleasure of working with Lavesh on a project and I can confidently say that their work exceeded my expectations. Their attention to detail, creative approach, and ability to effectively communicate with the team made the entire process seamless and enjoyable.",
  },
  {
    avatar: AVTR2,
    name: "Goldy Sahu",
    position: "Director(ARC)",
    review:
      "From the initial concept stage to the final product, Lavesh demonstrated an impressive level of skill and expertise. They were able to take our ideas and turn them into a beautiful and functional design that perfectly captured the essence of our brand",
  },
  {
    avatar: AVTR3,
    name: "Sumedh Jaiswal",
    position: "Digital Marketing Head",
    review:
      "Throughout the project, Lavesh kumbhalkar was responsive, reliable, and always willing to go the extra mile to ensure that we were completely satisfied with the final result. Their dedication to delivering high-quality work was evident in every aspect of the project.",
  },
  {
    avatar: AVTR4,
    name: "Mittal Singh",
    position: "Product Head",
    review:
      "I would highly recommend Lavesh sir to anyone looking for a talented and professional designer. Their work is truly exceptional and I look forward to working with them again in the future.",
  },
];

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