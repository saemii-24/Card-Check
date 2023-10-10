import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './Top.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { BsCoin, BsCreditCard, BsCurrencyDollar, BsDatabase } from 'react-icons/bs'
const Top = () => {
  const bank = [
    'KB국민카드',
    '우리카드',
    '우체국',
    '신한카드',
    'NH 농협카드',
    '하나카드',
    'IBK 카드',
    '그 외 카드사',
  ]
  const bankEtc = [
    'KB국민카드',
    '우리카드',
    '우체국',
    '신한카드',
    'NH 농협카드',
    '하나카드',
    'IBK 카드',
    '엔에이치엔페이코',
    '현대카드',
    '삼성카드',
    '토스뱅크',
    '코나카드',
  ]
  return (
    <>
      <Container fluid className="topContainer">
        <Container className="inner">
          <Row>
            <Col md={4} className="cardSelect">
              <h1>
                카드사별 인기
                <br /> 체크카드
              </h1>
              <p>현재 가장 인기있는 카드를 알아보세요!</p>

              <Form.Select aria-label="Default select example" size="lg">
                <option disabled defaultValue>
                  카드사를 선택하세요
                </option>
                {bank.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Form.Select>
            </Col>
            <Col className="cardPicture">
              <Row>
                <Col className="col" md={3}>
                  <BsCoin />
                </Col>
                <Col className="col" md={3}>
                  <BsCreditCard />
                </Col>
                <Col
                  className="col"
                  md={6}
                  style={{ backgroundImage: 'url(/image/rollingBg-1.jpg)' }}></Col>
              </Row>
              <Row>
                <Col md={2}>&#91;</Col>
                <Col className="rollingCompany">
                  <Swiper
                    className="swiperRolling"
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    direction={'vertical'}
                    autoplay={{
                      delay: 500,
                    }}
                    modules={[Autoplay]}>
                    {bankEtc.map((el) => (
                      <SwiperSlide key={el}>{el}</SwiperSlide>
                    ))}
                  </Swiper>
                </Col>
                <Col md={2} className="bracket--right">
                  &#93;
                </Col>
              </Row>
              <Row>
                <Col
                  className="col"
                  md={6}
                  style={{ backgroundImage: 'url(/image/rollingBg-2.jpg)' }}></Col>
                <Col className="col" md={3}>
                  <BsCurrencyDollar />
                </Col>
                <Col className="col" md={3}>
                  <BsDatabase />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Top
