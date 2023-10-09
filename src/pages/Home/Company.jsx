import React from 'react'
import { Container } from 'react-bootstrap'
import './Company.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import companyData from '../../data/companyData'

const Company = () => {
  return (
    <>
      <Container fluid className="company">
        <Container className="inner">
          <h3></h3>
        </Container>
        <Container fluid>
          <Swiper
            className="swiper"
            slidesPerView={5}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}>
            {companyData.map((el, index) => {
              return (
                <SwiperSlide className="slide" key={companyData[index]}>
                  <img
                    src={process.env.PUBLIC_URL + `/image/bankLogo-${index + 1}.png`}
                    alt={companyData[index]}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </Container>
    </>
  )
}

export default Company
