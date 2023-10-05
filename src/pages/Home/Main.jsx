import React from 'react'
import './Main.scss'
import { Container, Button } from 'react-bootstrap'
import { gsap } from 'gsap'

const Main = () => {
  return (
    <>
      <Container fluid className="main">
        <Container className="inner">
          <div className="textBox">
            <h1>나의 생활 패턴에 딱맞는 카드를 찾아보세요!</h1>
            <p>내 생활에 꼭 필요한 혜택을 선택하고 다양한 카드사의 카드를 한눈에 살펴보세요.</p>
            <Button className="searchBtn">카드 검색하기</Button>
          </div>
          <div className="cardImgBox">
            <div
              className="cardImg"
              style={{ backgroundImage: 'url(/image/card--yellow.png)' }}></div>
            <div
              className="cardImg"
              style={{ backgroundImage: 'url(/image/card--white.png)' }}></div>
            <div
              className="cardImg"
              style={{ backgroundImage: 'url(/image/card--green.png)' }}></div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Main
