import React, { useState, useEffect } from 'react'
import { Container, Button, Badge, Row, Col } from 'react-bootstrap'
import cardData from '../../data/cardData'
import './CardSearch.scss'
import cn from 'classnames'
import _ from 'lodash'
import ResultBox from './ResultBox'
const CardSearch = () => {
  //버튼을 클릭할 수 있도록 data에 acitve 요소를 추가한다. 추가는 useEffect에서 처리
  let newData = [...cardData] //전체 데이터
  useEffect(() => {
    newData.forEach((data) => {
      data.active = false
    })
  }, [])

  //버튼을 위한 카드 회사 data
  const company = []
  cardData.forEach((card) => {
    if (!company.includes(card.bank)) {
      company.push(card.bank)
    }
  })
  let companyBtn = company.map((company) => ({ button: company, active: false }))

  //버튼을 위한 카드 혜택 data
  const benefitData = []
  cardData.forEach((cardBenefit) => {
    cardBenefit.benefit.forEach((elBenefit) => {
      if (!benefitData.includes(...Object.keys(elBenefit))) {
        benefitData.push(...Object.keys(elBenefit))
      }
    })
  })
  let benefitBtn = benefitData.map((benefit) => ({ button: benefit, active: false }))

  //bank 이름별로 그룹 만들기
  let groupByBank = _.groupBy(cardData, 'bank')
  //배열 형식으로 만들기
  const groupByBankArr = Object.keys(groupByBank).map((key) => ({
    [key]: groupByBank[key],
  }))
  let [data, setData] = useState(groupByBankArr)

  //버튼 클릭시 filter 함수 실행
  let filterCondition = []
  const handleFilter = (btnText) => {
    //버튼을 클릭한 값을 filterCondition 배열에 담는다.
    if (!filterCondition.includes(btnText)) {
      filterCondition.push(btnText)
    } else {
      for (let i = 0; i < filterCondition.length; i++) {
        if (filterCondition[i] === btnText) {
          filterCondition.splice(i, 1)
        }
      }
    }
    console.log(filterCondition)
    //filterCondiiton을 이용해 카드 데이터를 정리한다.
    const filterData = [...cardData].filter((data) => filterCondition.indexOf(data.bank) > -1)
    // console.log(filterData)
    const filterGroup = _.groupBy(filterData, 'bank')
    console.log(filterGroup)
    const filterDataArr = Object.keys(filterGroup).map((key) => ({
      [key]: filterGroup[key],
    }))
    console.log(filterDataArr)
    return filterDataArr
  }
  //업데이트 수행
  const handleSetData = (btnText) => {
    const resultData = handleFilter(btnText)
    console.log(resultData)
    setData(resultData)
    console.log(resultData)
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
                <Button>카드 전체보기</Button>
                {companyBtn.map((btn, index) => (
                  <Button
                    key={`btn_${btn.button}`}
                    onClick={(e) => {
                      handleSetData(btn.button)
                    }}>
                    {btn.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="benefitBtnBox btnBox">
            <Col>
              <div className="benefitBtn">
                <Button>혜택 전체보기</Button>
                {benefitBtn.map((btn, index) => (
                  <Button
                    key={`btn_${btn.button}`}
                    onClick={(e) => {
                      handleSetData(btn.button)
                    }}>
                    {btn.button}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResultBox data={data} />
    </>
  )
}

export default CardSearch
