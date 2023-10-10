import React from 'react'
import { Container } from 'react-bootstrap'
<<<<<<< HEAD
=======
import { Container } from 'react-bootstrap'
>>>>>>> dev
import './Company.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Company = () => {
  const bankList = [
    { id: 1, bank: '하나카드' },
    { id: 2, bank: 'IBK기업은행' },
    { id: 3, bank: 'KB국민카드' },
    { id: 4, bank: 'Kbank' },
    { id: 5, bank: 'MG새마을금고' },
    { id: 6, bank: 'NH농협은행' },
    { id: 7, bank: 'PAYCO' },
    { id: 8, bank: '우체국예금' },
    { id: 9, bank: '신한카드' },
    { id: 10, bank: '토스뱅크' },
    { id: 11, bank: '우리카드' },
  ]
  return (
    <>
      <Container fluid className="company">
        <Container className="inner">
          <h3>카드사별 인기 체크카드</h3>
        </Container>
        <Container fluid>
          <Swiper
            className="swiper"
            slidesPerView={5}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}>
            {bankList.map((bank) => {
              return (
                <SwiperSlide key={bank.id} className="slide">
                  <img
                    className={`bank_${bank.id}`}
                    src={process.env.PUBLIC_URL + `/image/logo--${bank.id}.png`}
                    alt={bank.bank}
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
