import React from 'react'
import { Container, Badge, Row, Col } from 'react-bootstrap'
import './ResultBox.scss'
import pointIcon from '../../data/pointIcon'
import CardBtn from '../../components/CardBtn'
import _ from 'lodash'

const ResultBox = ({ cardData }) => {
  const originData = _.groupBy(cardData, 'bank')
  const data = Object.keys(originData).map((key) => ({ [key]: originData[key] }))

  return (
    <Container fluid className="resultBox">
      {data.length ? (
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
                      {Object.values(cardData)[0].map((card, valueIndex) => (
                        <Col
                          xl={4}
                          md={6}
                          sm={12}
                          className="cardImgAlign"
                          key={'imgAlign' + valueIndex}>
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
      ) : (
        <Container className="ifNull">
          <div className="nullCard">
            <img src={process.env.PUBLIC_URL + '/image/empty.svg'} alt="" />
            <h4>조건을 만족하는 카드가 없습니다.</h4>
          </div>
        </Container>
      )}
    </Container>
  )
}

export default ResultBox
