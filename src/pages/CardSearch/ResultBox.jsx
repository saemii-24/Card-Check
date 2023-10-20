import React, { useRef, useEffect, useState } from 'react'
import { Container, Badge, Row, Col } from 'react-bootstrap'
import './ResultBox.scss'
import pointIcon from '../../data/pointIcon'
import CardBtn from '../../components/CardBtn'
import _ from 'lodash'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { handleGsapAnimation } from '../../animation.js'
gsap.registerPlugin(ScrollTrigger)

const ResultBox = ({ cardData }) => {
  const originData = _.groupBy(cardData, 'bank')
  const data = Object.keys(originData).map((key) => ({ [key]: originData[key] }))
  // /*cardData가 변할 때 애니메이션을 적용하고자 한다.
  // 이때 cardData의 변화 속도를 gsap이 처리하면서 delay가 발생하므로
  // debounce를 만들어 처리해한다.
  // */

  // const [debounce, setDebounce] = useState(cardData)
  // const useDebounce = (value, delay) => {
  //   useEffect(() => {
  //     const handler = setTimeout(() => {
  //       setDebounce(cardData)
  //     }, delay)

  //     return () => {
  //       clearTimeout(handler)
  //     }
  //   }, [value, delay])

  //   return debounce
  // }

  // useDebounce(cardData, 300)
  // console.log(debounce)
  //gsap
  const resultRefs = useRef([])
  // //gsap 애니메이션 적용하기
  // useEffect(() => {
  //   if (data.length !== 0) {
  //     let result = gsap.context(() => {
  //       const resultArr = resultRefs.current
  //       console.log(resultArr)
  //       resultArr.forEach((ref) => {
  //         handleGsapAnimation(ref)
  //       })
  //       return () => result.revert()
  //     })
  //   }
  // }, [])

  return (
    <Container fluid className="resultBox">
      {data.length ? (
        <Container>
          {data.map((cardData, index) => (
            <div key={'cardData' + index} ref={(el) => (resultRefs.current[index] = el)}>
              <Row className="resultCardBox">
                <Col className="title">
                  <h2>{Object.keys(cardData)}</h2>
                </Col>
              </Row>
              <Row>
                {
                  <Col>
                    <Row className="cardImgBox">
                      {Object.values(cardData)[0].map((card, valueIndex) => (
                        <Col
                          xl={4}
                          md={6}
                          sm={12}
                          className="cardImgAlign"
                          key={'imgAlign' + valueIndex}>
                          <div className="cardBoxAll">
                            <div
                              className="cardImg"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + card.image})`,
                              }}></div>
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
                              <CardBtn data={card} />
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
      ) : (
        <Container className="ifNull">
          <div className="nullCard">
            <img src={process.env.PUBLIC_URL + '/image/empty.svg'} alt="" />
            <h4>조건을 만족하는 카드가 없습니다.</h4>
          </div>
        </Container>
      )}
    </Container>
  )
}

export default ResultBox
