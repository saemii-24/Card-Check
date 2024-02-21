import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col, Form, Badge, Card } from 'react-bootstrap'
import './Top.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { BsCoin, BsCreditCard, BsCurrencyDollar, BsDatabase } from 'react-icons/bs'
import cardData from '../../data/cardData'
import pointIcon from '../../data/pointIcon'
import CardBtn from '../../components/CardBtn'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { handleGsapAnimation, handleShowAnimation } from '../../animation.js'
gsap.registerPlugin(ScrollTrigger)

const Top = () => {
  const bank = [
    'KB국민카드',
    '우리카드',
    '우체국',
    '신한카드',
    'NH농협카드',
    '하나카드',
    'IBK카드',
    '그 외 카드사',
  ]
  const bankEtc = [
    'KB국민카드',
    '우리카드',
    '우체국',
    '신한카드',
    'NH농협카드',
    '하나카드',
    'IBK카드',
    '엔에이치엔페이코',
    '현대카드',
    '삼성카드',
    '토스뱅크',
    '코나카드',
  ]
  const [select, setSelect] = useState('defaultThis') //'카드사를 선택하세요' 보여주기
  const [cardShow, setCardShow] = useState(false) //'왼쪽 렌더링 결정'
  const [searchCard, setSearchCard] = useState(null)

  const handleSelect = (e) => {
    setSelect(e.target.value)
    setCardShow(true)
  }

  useEffect(() => {
    let resultData = [...cardData].filter((value) => value.bank === select)
    if (cardShow && resultData.length === 0) {
      resultData = [...cardData].filter(
        (value) =>
          value.bank === '엔에이치엔페이코' ||
          value.bank === '현대카드' ||
          value.bank === '삼성카드' ||
          value.bank === '코나카드',
      )
      resultData.splice(4)
    } else if (resultData.length > 4) {
      resultData.splice(4)
    }
    setSearchCard(resultData)
  }, [cardShow, select])

  // //gsap (스크롤 애니메이션)
  const topRefs = useRef([])
  // // //gsap 애니메이션 적용하기
  useEffect(() => {
    let top = gsap.context(() => {
      const topArr = topRefs.current
      topArr.forEach((ref) => {
        handleGsapAnimation(ref)
      })
      return () => top.revert()
    })
  }, [])

  // //gsap (카드등장 애니메이션)
  const topCardRef = useRef(null)
  useEffect(() => {
    if (cardShow) {
      const topCardDom = topCardRef.current
      // console.log(topCardDom)
      let topCard = gsap.context(() => {
        handleShowAnimation(topCardDom)
      })
      return () => topCard.revert()
    }
  }, [cardShow, searchCard])

  return (
    <>
      <Container fluid className="topContainer">
        <Container className="inner">
          <Row>
            <Col xxl={4} md={12} className="cardSelect" ref={(el) => (topRefs.current[0] = el)}>
              <h1>
                카드사별 인기
                <br /> 체크카드
              </h1>
              <p>현재 가장 인기있는 카드를 알아보세요!</p>

              <Form.Select
                aria-label="Default select example"
                size="lg"
                value={select}
                onChange={(e) => {
                  handleSelect(e)
                  // console.log(searchCard)
                }}>
                <option disabled value="defaultThis">
                  카드사를 선택하세요
                </option>
                {bank.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Form.Select>
            </Col>
            {!cardShow && (
              <Col className="cardPicture" ref={(el) => (topRefs.current[1] = el)}>
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
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/rollingBg-1.jpg)`,
                    }}></Col>
                </Row>
                <Row>
                  <Col md={2} className="bracket--left">
                    &#91;
                  </Col>
                  <Col className="rollingCompany">
                    <Swiper
                      className="swiperRolling"
                      slidesPerView={1}
                      allowTouchMove={false}
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
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/rollingBg-2.jpg)`,
                    }}></Col>
                  <Col className="col" md={3}>
                    <BsCurrencyDollar />
                  </Col>
                  <Col className="col" md={3}>
                    <BsDatabase />
                  </Col>
                </Row>
              </Col>
            )}
            {cardShow && (
              <Col className="cardTop">
                <Row ref={topCardRef}>
                  {searchCard.map((card, index) => (
                    <Col xxl={6} xl={3} lg={6} md={6} sm={12} xs={12} className="col" key={card.id}>
                      {
                        <div className="cardBoxAll">
                          <div
                            className="cardImg"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL + card.image})`,
                            }}></div>

                          <div className="pointBox">
                            <div className="cardInfo">
                              <Badge>{card.bank}</Badge>
                              <h3>{card.name}</h3>
                            </div>
                            {card.point.map((point, index) => (
                              <div key={'point' + index} className="point">
                                {pointIcon(`${Object.keys(point)}`)}
                                <h5>{Object.values(point)}</h5>
                              </div>
                            ))}
                            <CardBtn data={card} />
                          </div>
                        </div>
                      }
                    </Col>
                  ))}
                </Row>
              </Col>
            )}
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Top
