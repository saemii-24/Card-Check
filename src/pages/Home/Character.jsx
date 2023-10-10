import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Character.scss'
import characterData from '../../data/characterData'
import { gsap } from 'gsap'
const Character = () => {
  const [circleData, setCircleData] = useState(characterData[0])

  console.log(circleData)
  return (
    <Container fluid className="character">
      <Container className="inner">
        <Row className="content">
          <Col md={5}>
            <h1>
              요즘 대세
              <br /> 캐릭터 체크카드
            </h1>
            <p>보면 볼수록 귀여운 캐릭터 체크카드를 살펴보세요!</p>
            <div className="selectCircleBox">
              {characterData.map((character) => (
                <div
                  className="selectCircle"
                  style={{ backgroundImage: `url(${character.image})` }}
                  key={character.id}
                  onClick={() => {
                    setCircleData(character)
                  }}></div>
              ))}
            </div>
          </Col>
          <Col className="card" id="card">
            <div className="cardImg" style={{ backgroundImage: `url(${circleData.image})` }}></div>
            <div className="moreButton">
              <Button>+ 자세히</Button>
              <Button>+ 비교함</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Character
