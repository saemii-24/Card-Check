import React, { useEffect, useRef } from 'react'
import './Main.scss'
import { Container, Button, Col, Row } from 'react-bootstrap'

// 기본 리엑트 외의 것
import { MdReadMore } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//컴포넌트 시작점
const Main = () => {
  //benefitList
  const benefitList = [
    { id: 1, title: '교통비 할인 카드', content: '' },
    { id: 2, title: '편의점 할인 카드' },
    { id: 3, title: '영화 할인 카드' },
    { id: 4, title: '커피숍 할인 카드' },
    { id: 5, title: '해외결제 할인 카드' },
    { id: 6, title: '포인트 적립 카드' },
  ]
  let randomId = Math.floor(Math.random() * benefitList.length + 1)
  //gsap
  const mainRef = useRef(null)

  useEffect(() => {
    let card = gsap.context(() => {
      const main = mainRef.current
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: 'top top',
          end: '+=8000ox',
          pin: true,
          pinSpacing: false,
          markers: true,
          scrub: 1,
        },
      })
      cardTimeline
        .to('.cardImg1', { x: 200 }, 'card')
        .to('.cardImg2', { x: -200 }, 'card')
        .to('.cardImg3', { x: 100 }, 'card')
        .fromTo('.benefitBg', { height: 0 }, { height: '100vh' }, '-=80%')
        .to('.blackBg', { opacity: 1 })
        .fromTo('.benefitBg__content h4', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
        .fromTo('.benefitBg__content h1', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
        .fromTo('.benefitBg__btn', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
    })
    return () => card.revert()
  }, [])

  return (
    <>
      <Container fluid className="main" ref={mainRef}>
        <Container className="inner">
          <Row>
            <Col className="textBox">
              <h1>나의 생활 패턴에 딱맞는 카드를 찾아보세요!</h1>
              <p>생활에 꼭 필요한 혜택을 선택하고 다양한 카드사의 카드를 한눈에 살펴보세요.</p>
              <Button className="searchBtn">카드 검색하기</Button>
            </Col>
            <Col className="cardImgBox">
              <div
                className="cardImg1 cardImg"
                style={{ backgroundImage: 'url(/image/card--yellow.png)' }}></div>
              <div
                className="cardImg2 cardImg"
                style={{ backgroundImage: 'url(/image/card--red.png)' }}></div>
              <div
                className="cardImg3 cardImg"
                style={{ backgroundImage: 'url(/image/card--blue.png)' }}></div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="main--load">
          <div
            fluid
            className="benefitBg"
            style={{ backgroundImage: `url(/image/benefitBg--${randomId}.jpg)` }}>
            <div className="blackBg"></div>
          </div>
          <Container className="benefitBg__content">
            <div>
              <h4>지금 많이 찾는 혜택</h4>
              <h1 className="benefitBg__title">{benefitList[randomId - 1].title}</h1>
              <Button className="benefitBg__btn">
                <MdReadMore className="moreIcon" />
                자세한 혜택 보러가기
              </Button>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Main
