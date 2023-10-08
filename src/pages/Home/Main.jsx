import React, { useEffect, useRef } from 'react'
import './Main.scss'
import { Container, Button, Col, Row, Badge } from 'react-bootstrap'
import benefitData from '../../data/benefitData'
// 기본 리엑트 외의 것
import { MdReadMore } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//컴포넌트 시작점
const Main = () => {
  //benefitList

  let randomId = Math.floor(Math.random() * benefitData.length + 1)
  //gsap
  const mainRef = useRef(null)

  useEffect(() => {
    let card = gsap.context(() => {
      const main = mainRef.current
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: 'top top',
          end: '+=8000px',
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
        .fromTo('.main--load', { height: 0 }, { height: '100vh' }, '-=80%')
        .to('.blackBg', { opacity: 1 })
        .fromTo('.benefitBg__subTitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
        .fromTo('.benefitBg__title', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
        .fromTo('.contentBox0', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=60%')
        .fromTo('.contentBox1', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
        .fromTo('.contentBox2', { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=90%')
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
          <video autoPlay muted loop className="benefitBg">
            <source src={benefitData[randomId - 1].benefitBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="blackBg"></div>
          <Container className="benefitBg__content">
            <Row className="titleBox">
              <Col>
                <p className="benefitBg__subTitle">지금 많이 찾는 혜택</p>
                <h1 className="benefitBg__title">{benefitData[randomId - 1].title}</h1>
              </Col>
            </Row>
            <Row className="contentBoxes">
              {benefitData[randomId - 1].card.map((data, index) => {
                return (
                  <Col key={data.id} className={`contentBox contentBox${index}`}>
                    <p>{data.bank}</p>
                    <h4>{data.name}</h4>
                    <div className="badgeGroup">
                      {data.brand.map((el, index) => (
                        <Badge key={`brand_${data.id}_${index}`}>{el}</Badge>
                      ))}
                    </div>
                    <div className="benefitGroup">
                      {data.benefit.map((el, index) => {
                        if (el.hasOwnProperty(benefitData[randomId - 1].keyword)) {
                          return <p key={`benefit_${data.id}_${index}`}>{Object.values(el)}</p>
                        } else {
                          return null
                        }
                      })}
                      {data.benefit.map((el, index) => {
                        if (el.hasOwnProperty(benefitData[randomId - 1].keyword)) {
                          return null
                        } else {
                          return <p key={`benefit_${data.id}_${index}`}>{Object.values(el)}</p>
                        }
                      })}
                    </div>
                    <Button>더 자세한 혜택 알아보기</Button>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Main
