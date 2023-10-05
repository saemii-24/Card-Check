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
    </>
  )
}

export default Main
