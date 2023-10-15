import React, { useState, useEffect } from 'react'
import { Container, Button, Badge, Row, Col } from 'react-bootstrap'
import cardData from '../../data/cardData'
import { companyBtn, benefitBtn } from '../../data/btnData'
import './CardSearch.scss'
import cn from 'classnames'
import _ from 'lodash'
import ResultBox from './ResultBox'
const CardSearch = () => {
  //filter 기준이 될 버튼 만들기
  let companyBtnData = [...companyBtn]
  let benefitBtnData = [...benefitBtn]
  let [company, setCompany] = useState(companyBtnData)
  let [benefit, setBenefit] = useState(benefitBtnData)

  return (
    <>
      <Container fluid className="cardSearch">
        <Container>
          <Row className="title">
            <Col>
              <h1>카드 찾기</h1>
              <p>원하는 혜택을 골라 내게 딱 맞는 카드를 찾아보세요!</p>
            </Col>
          </Row>
          <Row className="companyBtnBox btnBox">
            <Col>
              <div className="companyBtn">
                <Button>카드 전체보기</Button>
                {company.map((item, index) => (
                  <Button
                    key={index}
                    className={(cn, { active: company[index].active })}
                    onClick={() => {
                      //버튼을 누르면 active가 false / true toggle
                      let newData = [...company]
                      newData[index].active = !newData[index].active
                      setCompany(newData)
                      console.log(company)
                    }}>
                    {item.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="benefitBtnBox btnBox">
            <Col>
              <div className="benefitBtn">
                <Button>혜택 전체보기</Button>
                {benefit.map((item, index) => (
                  <Button
                    key={index}
                    className={(cn, { active: benefit[index].active })}
                    onClick={() => {
                      //버튼을 누르면 active가 false / true toggle
                      let newData = [...benefit]
                      newData[index].active = !newData[index].active
                      setBenefit(newData)
                      console.log(benefit)
                    }}>
                    {item.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <ResultBox /> */}
    </>
  )
}

export default CardSearch
