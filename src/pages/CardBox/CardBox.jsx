import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCardBox } from '../../redux/cardBoxSlice'
import './CardBox.scss'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import benefitIcon from '../../data/benefitIcon'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
const CardBox = () => {
  const navigate = useNavigate()
  //redux
  const dispatch = useDispatch()
  const handleDeleteCardBox = (info) => {
    dispatch(deleteCardBox(info))
  }
  const cardBoxData = useSelector((state) => state.cardBoxSlice.value)
  console.log(cardBoxData)
  const dummyData = (
    <div className="dummyCardImgBox">
      <div className="dummyCardImg">
        <h5>카드 더 비교하기</h5>
      </div>
      <AiOutlinePlus
        onClick={() => {
          navigate('/cardSearch')
        }}
      />
    </div>
  )

  const handleDummyData = (num) => {
    let repeatData = []
    for (let i = 0; i < 3 - num; i++) {
      repeatData.push(dummyData)
    }
    return repeatData
  }
  console.log(handleDummyData(cardBoxData.length))
  return (
    <Container fluid className="cardBox">
      <Container className="inner">
        <Row>
          <h1>카드 비교하기</h1>
        </Row>
        <Row>
          {cardBoxData.map((card) => (
            <Col key={card.id} className="thisCardBox">
              <Row>
                <div className="cardImgBox">
                  <div
                    className="cardImg"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + card.image})`,
                    }}></div>
                  <AiOutlineClose
                    onClick={() => {
                      handleDeleteCardBox(card)
                    }}
                  />
                </div>
                <div className="bankName">
                  <div>
                    <h6>{card.bank}</h6>
                    <h5>{card.name}</h5>
                  </div>
                </div>
                <div className="cost">
                  <h6>연회비</h6>
                  <p>{card.cost}</p>
                </div>
                <div className="brand">
                  <h6>브랜드</h6>
                  <div>
                    {card.brand.map((brand) => (
                      <p key={brand}>{brand}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h6>혜택</h6>
                  {card.benefit.map((benefit, index) => (
                    <div key={'benefit' + index} className="benefit">
                      {benefitIcon(`${Object.keys(benefit)}`)}
                      <p>{Object.values(benefit)}</p>
                    </div>
                  ))}
                </div>
              </Row>
            </Col>
          ))}
          {handleDummyData(cardBoxData.length).map((dummyData, index) => (
            <Col key={index} className="thisCardBox dummyThisCardBox">
              {dummyData}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default CardBox
