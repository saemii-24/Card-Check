import React, { useState } from 'react'
import { Container, Button, Badge, Row, Col } from 'react-bootstrap'
import companyData from '../../data/companyData'
import cardData from '../../data/cardData'
import './CardSearch.scss'
import cn from 'classnames'
import ResultBox from './ResultBox'
const CardSearch = () => {
  //카드 회사
  const company = []
  cardData.forEach((card) => {
    if (!company.includes(card.bank)) {
      company.push(card.bank)
    }
  })
  let companyList = company.map((company) => ({ button: company, active: false }))

  //카드 혜택
  const benefitData = []
  cardData.forEach((cardBenefit) => {
    cardBenefit.benefit.forEach((elBenefit) => {
      if (!benefitData.includes(...Object.keys(elBenefit))) {
        benefitData.push(...Object.keys(elBenefit))
      }
    })
  })
  let benefitList = benefitData.map((benefit) => ({ button: benefit, active: false }))

  //버튼 클릭 이벤트
  let [companyBtn, setCompanyBtn] = useState(companyList)
  let [benefitBtn, setBenefitBtn] = useState(benefitList)
  let [companyBtnAll, setCompanyBtnAll] = useState(true)
  let [benefitBtnAll, setBenefitBtnAll] = useState(true)

  const handleCompanyBtnReset = () => {
    let newData = [...companyBtn]
    newData.forEach((btn) => {
      btn.active = false
    })
    setCompanyBtn(newData)
  }
  const handleBenefitBtnReset = () => {
    let newData = [...benefitBtn]
    newData.forEach((btn) => {
      btn.active = false
    })
    setBenefitBtn(newData)
  }
  const handleCompanyBtnActive = (index) => {
    let newData = [...companyBtn]
    if (newData[index].active) {
      newData[index].active = false
    } else {
      newData[index].active = true
    }
    setCompanyBtn(newData)
    console.log(companyBtn)
  }
  const handleBenefitBtnActive = (index) => {
    let newData = [...benefitBtn]
    if (newData[index].active) {
      newData[index].active = false
    } else {
      newData[index].active = true
    }
    setBenefitBtn(newData)
    console.log(benefitBtn)
  }
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
                <Button
                  className={cn('categoryBtn', { active: companyBtnAll })}
                  onClick={() => {
                    handleCompanyBtnReset()
                    if (companyBtnAll === false) {
                      setCompanyBtnAll(true)
                    }
                  }}>
                  카드 전체보기
                </Button>
                {companyBtn.map((company, index) => (
                  <Button
                    key={'company' + index}
                    onClick={() => {
                      handleCompanyBtnActive(index)
                      setCompanyBtnAll(false)
                    }}
                    className={cn({ active: companyBtn[index].active === true })}>
                    {company.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="benefitBtnBox btnBox">
            <Col>
              <div className="benefitBtn">
                <Button
                  className={cn('categoryBtn', { active: benefitBtnAll })}
                  onClick={() => {
                    handleBenefitBtnReset()
                    if (benefitBtnAll === false) {
                      setBenefitBtnAll(true)
                    }
                  }}>
                  혜택 전체보기
                </Button>
                {benefitList.map((benefit, index) => (
                  <Button
                    className={cn({ active: benefitBtn[index].active === true })}
                    key={'benefit' + index}
                    onClick={() => {
                      handleBenefitBtnActive(index)
                      setBenefitBtnAll(false)
                    }}>
                    {benefit.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResultBox companyBtn={companyBtn} benefitBtn={benefitBtn} />
    </>
  )
}

export default CardSearch
