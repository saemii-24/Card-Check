import React from 'react'
import { Container } from 'react-bootstrap'
import './Company.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Company = () => {
  return (
    <>
      //TODO:SWIPER 수정, Companycss수정
      <Container fluid className="company">
        <Container className="inner">
          <h3>카드사별 인기 체크카드</h3>
        </Container>
        <Container fluid>
          <Swiper
            className="swiper"
            slidesPerView={3}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}>
            <SwiperSlide className="slide">Slide 1</SwiperSlide>
            <SwiperSlide className="slide">Slide 2</SwiperSlide>
            <SwiperSlide className="slide">Slide 3</SwiperSlide>
            <SwiperSlide className="slide">Slide 4</SwiperSlide>
            <SwiperSlide className="slide">Slide 5</SwiperSlide>
            <SwiperSlide className="slide">Slide 6</SwiperSlide>
            <SwiperSlide className="slide">Slide 7</SwiperSlide>
            <SwiperSlide className="slide">Slide 8</SwiperSlide>
            <SwiperSlide className="slide">Slide 9</SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </>
  )
}

export default Company
