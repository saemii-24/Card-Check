import React from 'react'
import { useParams } from 'react-router-dom'
import cardData from '../../data/cardData'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap'
import benefitIcon from '../../data/benefitIcon'
import pointIcon from '../../data/pointIcon'
import Tilt from 'react-parallax-tilt'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardDetail.scss'
const CardDetail = () => {
  let params = useParams()
  let id = params.id //정보 id값
  //params로 데이터 찾기
  let filterData = [...cardData].filter((cardData) => cardData.id === id)
  let data = filterData[0]
  console.log(data)
  return (
    <Container fluid className="cardDetail">
      <Container fluid className="cardBanner">
        <Container>
          <Row>
            <Col className="cardImgBox">
              <div>
                <Tilt className="cardImg" style={{ backgroundImage: `url(${data.image})` }}></Tilt>
              </div>
            </Col>
            <Col className="cardInfoBox">
              <Badge>{data.bank}</Badge>
              <h1>{data.name}</h1>
              <Row className="cardInfo">
                {data.point.map((point, index) => (
                  <div key={'point' + index} className="point">
                    {pointIcon(`${Object.keys(point)}`)}
                    <h5>{Object.values(point)}</h5>
                  </div>
                ))}
                <Button>
                  <AiOutlineInbox strokeWidth="20" />
                  &nbsp;카드 비교
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Row>
        <Col className="costBrand">
          <Container>
            <Row>
              <Col className="cost">
                <h5>{data.cost}</h5>
              </Col>
              <Col className="brand">
                {data.brand.map((badge) => {
                  return <h5 key={badge}>{badge}</h5>
                })}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="benefitBox">
            <Row>
              <Col>
                <h1>카드 혜택</h1>
              </Col>
            </Row>
            {data.benefit.map((benefit, index) => (
              <Row key={'benefit' + index}>
                <Col className="benefit">
                  {benefitIcon(`${Object.keys(benefit)}`)}
                  <div>{Object.values(benefit)}</div>
                </Col>
              </Row>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default CardDetail
