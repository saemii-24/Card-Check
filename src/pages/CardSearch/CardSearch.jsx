import React, { useState, useEffect, useRef } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import cardData from '../../data/cardData'
import { companyBtn, benefitBtn } from '../../data/btnData'
import './CardSearch.scss'
import cn from 'classnames'
import ResultBox from './ResultBox'
import { MdRadioButtonUnchecked, MdCheckCircle } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { handleGsapAnimation } from '../../animation.js'
gsap.registerPlugin(ScrollTrigger)

const CardSearch = () => {
  //search 기준이 될 버튼 state
  let companyBtnData = [...companyBtn]
  let benefitBtnData = [...benefitBtn]
  let [allCardView, setAllCardView] = useState(false)
  let [company, setCompany] = useState(companyBtnData)
  let [benefit, setBenefit] = useState(benefitBtnData)

  //ReulstBox에서 렌더링 될 filter 된 카드 정보들
  let [filterData, setFilterData] = useState(cardData)
  // 카드 전체보기 버튼의 state
  let [btnAll, setBtnAll] = useState(true)
  // 카드 전체보기 함수
  const handleAllBtn = () => {
    setAllCardView(true)
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
  const handleFilterBtn = () => {
    setAllCardView(false)
    let thisData = [...cardData]

    let companyMapArr = company.filter((el) => el.active === true).map((el) => el.company)
    let benefitMapArr = benefit.filter((el) => el.active === true).map((el) => el.benefit)

    const filterObj = thisData.filter((card) => {
      const companyCondition = companyMapArr.includes(card.bank) //card.bank(은행이름)가 companyMapArr(선택 은행이름 배열)에 포함되어 있는가?
      const benefitCondition = benefitMapArr.every(
        (
          condition, //모든 benefit condition을 만족하는가?
        ) => card.benefit.some((benefit) => Object.keys(benefit)[0] === condition), //card의 여러 benefit들 중 제시 된 condition을 만족하는 것이 있는가?
      )
      return companyCondition && benefitCondition
    })
    setFilterData(filterObj)
  }

  useEffect(() => {
    if (!allCardView) {
      handleFilterBtn()
    }
  }, [company, benefit])

  //gsap
  const cardSearchRef = useRef()
  useEffect(() => {
    let cardSearch = gsap.context(() => {
      const cardSearchDom = cardSearchRef.current
      handleGsapAnimation(cardSearchDom)

      return () => cardSearch.revert()
    })
  }, [filterData])

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
                      handleFilterBtn()

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
                      handleFilterBtn()

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
                  setAllCardView(true)
                  handleAllBtn()
                }}>
                카드 전체보기
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <div ref={cardSearchRef}>
        <ResultBox cardData={filterData} />
      </div>
    </>
  )
}

export default CardSearch
