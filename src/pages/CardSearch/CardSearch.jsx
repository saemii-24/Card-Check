import React, { useState, useEffect } from 'react'
import { Container, Button, Badge, Row, Col } from 'react-bootstrap'
import cardData from '../../data/cardData'
import { companyBtn, benefitBtn } from '../../data/btnData'
import './CardSearch.scss'
import cn from 'classnames'
import _, { filter } from 'lodash'
import ResultBox from './ResultBox'
const CardSearch = () => {
  //filter 기준이 될 버튼 만들기
  let companyBtnData = [...companyBtn]
  let benefitBtnData = [...benefitBtn]
  let [company, setCompany] = useState(companyBtnData)
  let [benefit, setBenefit] = useState(benefitBtnData)
  let [filterData, setFilterData] = useState(cardData)
  let [companyBtnAll, setCompanyBtnAll] = useState(true)
  let [benefitBtnAll, setBenefitBtnAll] = useState(true)
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
    // console.log(filterObj)
  }
  useEffect(() => {
    handleCompanyBtn()
    handleBenefitBtn()
  }, [company, benefit])
  // useEffect(() => {
  // }, [benefit, filterData])

  const handleBenefitBtn = () => {
    let thisData = [...filterData]
    // console.log(thisData)
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
  const handleAllBtn = (originData, setOriginData) => {
    let newData = [...originData]
    for (let i = 0; i < newData.length; i++) {
      newData[i].active = true
    }
    console.log(newData)
    setOriginData(newData)
    handleCompanyBtn()
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
                  className={(cn, { active: companyBtnAll })}
                  onClick={() => {
                    setCompanyBtnAll(true)
                    handleAllBtn(company, setCompany)
                  }}>
                  카드 전체보기
                </Button>
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
                        setCompanyBtnAll(true)
                      } else if (company.some((btn) => btn.active === false)) {
                        setCompanyBtnAll(false)
                      }
                    }}>
                    {item.company}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="benefitBtnBox btnBox">
            <Col>
              <div className="benefitBtn">
                <Button
                  className={(cn, { active: benefitBtnAll })}
                  onClick={() => {
                    setCompanyBtnAll(true)
                    handleAllBtn(benefit, setBenefit)
                  }}>
                  혜택 선택 초기화
                </Button>
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
                      setBenefitBtnAll(false)

                      if (benefit.every((btn) => btn.active === false)) {
                        setBenefitBtnAll(true)
                      } else if (benefit.some((btn) => btn.active === false)) {
                        setBenefitBtnAll(false)
                      }
                    }}>
                    {item.benefit}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResultBox cardData={filterData} />
    </>
  )
}

export default CardSearch
