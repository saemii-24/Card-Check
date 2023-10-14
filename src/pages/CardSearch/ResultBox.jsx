import React from 'react'
import { Container, Badge, Row, Col } from 'react-bootstrap'
import './ResultBox.scss'
import pointIcon from '../../data/pointIcon'
import CardBtn from '../../components/CardBtn'

const ResultBox = ({ data }) => {
  return (
    <Container fluid className="resultBox">
      <Container>
        {data.map((cardData, index) => (
          <div key={'cardData' + index}>
            <Row className="resultCardBox">
              <Col className="title">
                <h2>{Object.keys(cardData)}</h2>
              </Col>
            </Row>
            <Row>
              {
                <Col>
                  <Row className="cardImgBox">
                    {Object.values(cardData)[0].map((card, index) => (
                      <Col md={4} className="cardImgAlign" key={'imgAlign' + index}>
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
                      </Col>
                    ))}
                  </Row>
                </Col>
              }
            </Row>
          </div>
        ))}
      </Container>
    </Container>
  )
}

export default ResultBox
