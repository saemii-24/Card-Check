import React, { useEffect, useRef } from 'react'
import './Main.scss'
import { Container, Button, Col, Row } from 'react-bootstrap'

// 기본 리엑트 외의 것
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//컴포넌트 시작점
const Main = () => {
  //gsap
  const mainRef = useRef(null)

  useEffect(() => {
    let card = gsap.context(() => {
      const main = mainRef.current
      gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: 'top top',
          // end: '+=5000',
          pin: true,
          pinSpacing: false,
          markers: true,
        },
      })
    })

    return () => card.revert()
  }, [])

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
              className="cardImg1"
              style={{ backgroundImage: 'url(/image/card--yellow.png)' }}></div>
            <div className="cardImg2" style={{ backgroundImage: 'url(/image/card--red.png)' }}></div>
            <div
              className="cardImg3"
              style={{ backgroundImage: 'url(/image/card--blue.png)' }}></div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Main
