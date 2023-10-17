import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import cardData from '../../data/cardData'
import { companyBtn, benefitBtn } from '../../data/btnData'
import './CardSearch.scss'
import cn from 'classnames'
import _ from 'lodash'
import ResultBox from './ResultBox'
import { MdRadioButtonUnchecked, MdCheckCircle } from 'react-icons/md'
const CardSearch = () => {
  //search 기준이 될 버튼 state
  let companyBtnData = [...companyBtn]
  let benefitBtnData = [...benefitBtn]
  let [company, setCompany] = useState(companyBtnData)
  let [benefit, setBenefit] = useState(benefitBtnData)

  //ReulstBox에서 렌더링 될 filter 된 카드 정보들
  let [filterData, setFilterData] = useState(cardData)
  // 카드 전체보기 버튼의 state
  let [btnAll, setBtnAll] = useState(true)
  // 카드 전체보기 함수
  const handleAllBtn = () => {
    let newCompanyData = [...company]
    for (let i = 0; i < newCompanyData.length; i++) {
      newCompanyData[i].active = false
    }
    let newBenefitData = [...benefit]
    for (let i = 0; i < newBenefitData.length; i++) {
      newBenefitData[i].active = false
    }
    setCompany(newCompanyData)
    setBenefit(newBenefitData)
    let originData = [...cardData]
    setFilterData(originData)
  }

  //회사 filter 함수 (하단 혜택 filter함수 콜백함수로 가지고 있음)
  useEffect(() => {
    handleCompanyBtn()
    handleBenefitBtn()
  }, [company, benefit])

  const handleCompanyBtn = () => {
    let thisData = [...cardData]
    //회사 필터 기준 생성

    let activeBtn = company.filter((el) => {
      return el.active === true
    })
    //회사 기준 데이터 필터
    const mapArr = activeBtn.map((el) => el.company)
    const filterObj = thisData.filter((el) => {
      return mapArr.includes(el.bank)
    })

    handleBenefitBtn()
    setFilterData(filterObj)
  }

  //혜택 filter 함수,
  const handleBenefitBtn = () => {
    let thisData = [...filterData]
    // //혜택 필터 기준 생성
    let activeBtn = benefit.filter((el) => {
      return el.active === true
    })
    const mapArr = activeBtn.map((el) => el.benefit)

    const filterObj = []
    thisData.forEach((card) => {
      if (
        mapArr.every((condition) => {
          return card.benefit.some((benefit) => {
            return Object.keys(benefit)[0] === condition
          })
        })
      ) {
        filterObj.push(card)
      }
    })
    setFilterData(filterObj)
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
                <h5>카드사 별:</h5>
                {company.map((item, index) => (
                  <Button
                    key={index}
                    className={(cn, { active: company[index].active })}
                    onClick={() => {
                      //버튼을 누르면 active가 false / true toggle
                      let newData = [...company]
                      newData[index].active = !newData[index].active
                      setCompany(newData)
                      handleCompanyBtn()

                      if (company.every((btn) => btn.active === false)) {
                        setBtnAll(true)
                      } else if (company.some((btn) => btn.active === false)) {
                        setBtnAll(false)
                      }
                    }}>
                    {item.active ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                    {item.company}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="benefitBtnBox btnBox">
            <Col>
              <div className="benefitBtn">
                <h5>혜택 별:</h5>
                {benefit.map((item, index) => (
                  <Button
                    key={index}
                    className={(cn, { active: benefit[index].active })}
                    onClick={() => {
                      //버튼을 누르면 active가 false / true toggle
                      let newData = [...benefit]
                      newData[index].active = !newData[index].active
                      setBenefit(newData)
                      handleCompanyBtn()
                      setBtnAll(false)

                      if (benefit.every((btn) => btn.active === false)) {
                        setBtnAll(true)
                      } else if (benefit.some((btn) => btn.active === false)) {
                        setBtnAll(false)
                      }
                    }}>
                    {item.active ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                    {item.benefit}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="btnAlign">
              <Button
                className={cn('cardAll', { active: btnAll })}
                onClick={() => {
                  setBtnAll(true)
                  handleAllBtn()
                }}>
                카드 전체보기
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResultBox cardData={filterData} />
    </>
  )
}

export default CardSearch
