import React, { useState } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import './Character.scss'
import characterData from '../../data/characterData'
import pointIcon from '../../data/pointIcon'
import Tilt from 'react-parallax-tilt'
import CardBtn from '../../components/CardBtn'

const Character = () => {
  const [circleData, setCircleData] = useState(characterData[0])
  const [id, setId] = useState(characterData[0].id)
  return (
    <Container fluid className="character">
      <Container className="inner">
        <Row className="content">
          <Col lg={6} md={12} className="col">
            <h1>
              요즘 대세
              <br /> 캐릭터 체크카드
            </h1>
            <p>보면 볼수록 귀여운 캐릭터 체크카드를 살펴보세요!</p>
            <div className="selectCircleBox">
              {characterData.map((character) => (
                <div
                  className="selectCircle"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + character.image})` }}
                  key={character.id}
                  onClick={() => {
                    setCircleData(character)
                  }}></div>
              ))}
            </div>
            <div className="pointBox">
              <div className="cardInfo">
                <Badge>{circleData.bank}</Badge>
                <h3>{circleData.name}</h3>
              </div>
              {circleData.point.map((point, index) => (
                <div key={'point' + index} className="point">
                  {pointIcon(`${Object.keys(point)}`)}
                  <h5>{Object.values(point)}</h5>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={12} className="card" id="card">
            <Tilt
              className="cardImg"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + circleData.image})`,
              }}></Tilt>
            <CardBtn data={circleData} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Character
