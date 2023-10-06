import React, { useEffect, useRef } from 'react'
import './Main.scss'
import { Container, Button, Col, Row } from 'react-bootstrap'

// 기본 리엑트 외의 것
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//컴포넌트 시작점
const Main = () => {
  //benefitList
  const benefitList = [
    { id: 1, title: '대중교통 할인 카드' },
    { id: 2, title: '편의점 할인 카드' },
    { id: 3, title: '영화 할인 카드' },
    { id: 4, title: '커피숍 할인 카드' },
    { id: 5, title: '해외결제 할인 카드' },
    { id: 6, title: '포인트 적립 카드' },
  ]
  //(1~6 랜덤)
  let randomId = Math.floor(Math.random() * benefitList.length + 1)
  console.log(randomId)

  //useRef
  const cardImg1 = useRef(null)
  const cardImg2 = useRef(null)
  const cardImg3 = useRef(null)

  //gsap
  const mainRef = useRef(null)

  useEffect(() => {
    let card = gsap.context(() => {
      const main = mainRef.current
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: 'top top',
          end: '+=7000',
          pin: true,
          scrub: 1,
          pinSpacing: false,
          markers: true,
        },
      })
      cardTimeline
        .to(cardImg1.current, { x: -200 }, 'cardGsap')
        .to(cardImg2.current, { x: 0 }, 'cardGsap')
        .to(cardImg3.current, { x: -200 }, 'cardGsap')
        .fromTo('.main--benefit', { height: 0 }, { height: '110vh', duration: 1 }, '-=0.5')
    })
    return () => card.revert()
  }, [])

  //useEffect
  // useEffect(() => {
  //   cardScroll()
  // }, [])

  // useEffect(() => {
  //   let card = gsap.context(() => {
  //     const main = mainRef.current
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: main,
  //         start: 'top top',
  //         // end: '+=5000',
  //         pin: true,
  //         pinSpacing: false,
  //         markers: true,
  //       },
  //     })
  //   })
  //   return () => card.revert()
  // }, [])

  // //useEffect
  // useEffect(() => {
  //   cardScroll()
  // }, [])

  // //스크롤 카드 애니메이션
  // const cardScroll = () => {
  //   window.addEventListener('scroll', () => {
  //     let scroll = window.scrollY
  //     const card1 = cardImg1.current
  //     const card2 = cardImg2.current
  //     const card3 = cardImg3.current
  //     console.log(card1)
  //     card1.style.transform = `translateX(${scroll * -1}px)`
  //     card2.style.transform = `translateX(${scroll * 1.1 + 200}px)`
  //     card3.style.transform = `translateX(${scroll * -1.2}px)`
  //   })
  // }

  return (
    <>
      <Container fluid className="main" ref={mainRef}>
        <Container className="inner">
          <Row className="row--inner">
            <Col className="textBox">
              <h1>나의 생활 패턴에 딱맞는 카드를 찾아보세요!</h1>
              <p>생활에 꼭 필요한 혜택을 선택하고 다양한 카드사의 카드를 한눈에 살펴보세요.</p>
              <Button className="searchBtn">카드 검색하기</Button>
            </Col>
            <Col className="cardImgBox">
              <div
                ref={cardImg1}
                className="cardImg"
                style={{ backgroundImage: 'url(/image/card--yellow.png)' }}></div>
              <div
                ref={cardImg2}
                className="cardImg"
                style={{ backgroundImage: 'url(/image/card--red.png)' }}></div>
              <div
                ref={cardImg3}
                className="cardImg"
                style={{ backgroundImage: 'url(/image/card--blue.png)' }}></div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="main--benefit">
          <Container
            fluid
            className="benefit__bg"
            style={{ backgroundImage: `url(/image/benefit__bg--${randomId}.jpg)` }}></Container>
          <Container>
            <Row>
              <Col>
                <h1 className="benefit__title">{benefitList[randomId - 1].title}</h1>
                <Button>카드 둘러보기</Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Main
