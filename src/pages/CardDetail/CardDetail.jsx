import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import cardData from '../../data/cardData'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap'
import benefitIcon from '../../data/benefitIcon'
import pointIcon from '../../data/pointIcon'
import Tilt from 'react-parallax-tilt'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardDetail.scss'
import { useDispatch } from 'react-redux'
import { putCardBox, showFullPopup } from '../../redux/cardBoxSlice'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const CardDetail = () => {
  let params = useParams()
  let id = params.id //정보 id값
  //params로 데이터 찾기
  let filterData = [...cardData].filter((cardData) => cardData.id === id)
  let data = filterData[0]
  //redux
  const dispatch = useDispatch()
  const handlePutCardBox = (data) => {
    dispatch(putCardBox(data))
  }
  const handleShowFullPopup = () => {
    dispatch(showFullPopup())
  }
  //gsap
  const cardDetailImgRef = useRef([])
  // //gsap 애니메이션 적용하기
  useEffect(() => {
    let cardDetailImg = gsap.context(() => {
      const cardDetailImgDom = cardDetailImgRef.current
      gsap.fromTo(
        cardDetailImgDom,
        { autoAlpha: 0, scale: 0 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardDetailImgDom,
            toggleActions: 'play pause play pause',
          },
        },
      )
      return () => cardDetailImg.revert()
    })
  }, [])

  // // //gsap 애니메이션 적용하기
  useEffect(() => {
    let cardDetailInfo = gsap.context(() => {
      const cardDetailImgDom = cardDetailImgRef.current
      //point 차례로 등장
      const cardInfoTimeline = gsap.timeline({
        ease: 'power1.out',
        scrollTrigger: {
          trigger: cardDetailImgDom,
          toggleActions: 'play pause play pause',
        },
      })
      cardInfoTimeline
        .fromTo('.badge', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: 0.3 })
        .fromTo('.cardName', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: 0.3 }, '-=30%')
        .fromTo('.point0', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: 0.3 }, '-=30%')
        .fromTo('.point1', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: 0.3 }, '-=30%')
        .fromTo('.point2', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: 0.3 }, '-=30%')
        .fromTo('.btn', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, '-=30%')

      //카드 이미지
    })
    return () => cardDetailInfo.revert()
  }, [])

  return (
    <Container fluid className="cardDetail">
      <Container fluid className="cardBanner">
        <Container>
          <Row>
            <Col md={6} sm={12} className="cardImgBox">
              <div ref={cardDetailImgRef}>
                <Tilt
                  className="cardImg"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}></Tilt>
              </div>
            </Col>
            <Col className="cardInfoBox">
              <Badge>{data.bank}</Badge>
              <h1 className="cardName">{data.name}</h1>
              <Row className="cardInfo">
                {data.point.map((point, index) => (
                  <div key={'point' + index} className={`point point${index}`}>
                    {pointIcon(`${Object.keys(point)}`)}
                    <h5>{Object.values(point)}</h5>
                  </div>
                ))}
                <Button
                  onClick={() => {
                    handlePutCardBox(data)
                    handleShowFullPopup()
                  }}>
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
