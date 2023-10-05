import React, { useEffect, useRef } from 'react'
import './Main.scss'
import { Container, Button, Col, Row } from 'react-bootstrap'

// 기본 리엑트 외의 것
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//컴포넌트 시작점
const Main = () => {
  const cardImg1 = useRef(null)
  const cardImg2 = useRef(null)
  const cardImg3 = useRef(null)

  //useEffect
  useEffect(() => {
    cardScroll()
  }, [])

  //gsap
  const mainRef = useRef(null)

  useEffect(() => {
    let card = gsap.context(() => {
      const main = mainRef.current
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: 'top top',
          end: '+=500',
          pin: true,
          pinSpacing: false,
          markers: true,
        },
      })
      cardTimeline.to('.main--loading', { opacity: 1, duration: 1 })
    })

    return () => card.revert()
  }, [])

  //스크롤 카드 애니메이션
  const cardScroll = () => {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      const card1 = cardImg1.current
      const card2 = cardImg2.current
      const card3 = cardImg3.current
      console.log(card1)
      card1.style.transform = `translateX(${scroll * -1}px)`
      card2.style.transform = `translateX(${scroll * 1.1 + 200}px)`
      card3.style.transform = `translateX(${scroll * -1.2}px)`
    })
  }

  return (
    <>
      <Container fluid className="main" ref={mainRef}>
        <Container className="inner">
          <div className="textBox">
            <h1>나의 생활 패턴에 딱맞는 카드를 찾아보세요!</h1>
            <p>생활에 꼭 필요한 혜택을 선택하고 다양한 카드사의 카드를 한눈에 살펴보세요.</p>
            <Button className="searchBtn">카드 검색하기</Button>
          </div>
          <div className="cardImgBox">
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
          </div>
        </Container>
      </Container>
      <Container fluid className="main--loading">
        <Container className="inner">
          <h1>인기 혜택</h1>
          <Container>
            <Row>
              <Col>교통비 인상에 대비하자! 교통 할인 카드 모음</Col>
              <Col>편의점에 가면 도시락도 있고 할인 카드도 쓸 수 있어요</Col>
              <Col>영화관 할인 카드로 문화생활도 부담없이!</Col>
              <Col>커피한잔으로 즐기는 여유☕ 커피숍 할인 카드 모아보기</Col>
              <Col>해외여행도 문제없지! 해외 결제 할인 카드 모음😎</Col>
              <Col>티끌 모아 태산! 포인트를 쌓아보아요</Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Main
