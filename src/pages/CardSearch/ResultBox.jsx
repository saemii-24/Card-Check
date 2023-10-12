import React, { useState } from 'react'
import cardData from '../../data/cardData'
import { Container, Button, Badge, Row, Col } from 'react-bootstrap'
import _ from 'lodash'
import './ResultBox.scss'
import pointIcon from '../../data/pointIcon'
import CardBtn from '../../components/CardBtn'

const ResultBox = ({ companyBtn, benefitBtn }) => {
  //bank 이름별로 그룹 만들기
  let groupByBank = _.groupBy(cardData, 'bank')
  //배열 형식으로 만들기
  const groupByBankArr = Object.keys(groupByBank).map((key) => ({
    [key]: groupByBank[key],
  }))

  let [filterData, setFilterData] = useState(groupByBankArr)
  console.log(filterData)
  let condition = [...companyBtn, ...benefitBtn]
  let filterCondition = []
  condition.forEach((el, index) => {
    if (el.active === true) {
      console.log(condition[index].button)
      filterCondition.push(condition[index].button)
    } else {
      return
    }
  })
  console.log(filterCondition)
  return (
    <Container fluid className="resultBox">
      <Container>
        {filterData.map((cardData, index) => (
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
                            style={{ backgroundImage: `url(${card.image})` }}></div>
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
                            <CardBtn />
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
