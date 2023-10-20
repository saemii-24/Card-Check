import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import './Character.scss'
import characterData from '../../data/characterData'
import pointIcon from '../../data/pointIcon'
import Tilt from 'react-parallax-tilt'
import CardBtn from '../../components/CardBtn'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { handleGsapAnimation } from '../../animation.js'
gsap.registerPlugin(ScrollTrigger)

const Character = () => {
  const [circleData, setCircleData] = useState(characterData[0])
  const [firstMount, setFirstMount] = useState(true)
  const [id, setId] = useState(characterData[0].id)

  // //gsap (timeline 애니메이션)
  const pointRef = useRef([])
  const characterRef = useRef([])
  // // //gsap 애니메이션 적용하기

  useEffect(() => {
    let point = gsap.context(() => {
      //title animation
      const characterDom = characterRef.current
      if (firstMount) {
        handleGsapAnimation(characterDom)
      }
      //point 차례로 등장
      const pointTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: characterDom,
          start: 'top 70%',
          end: 'top 20%',
        },
      })
      pointTimeline
        .fromTo(
          '.pointBox',
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.3, delay: firstMount ? 0.3 : 0 },
        )
        .fromTo('.point0', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.3 })
        .fromTo('.point1', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.3 })
        .fromTo('.point2', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.3 })

      //카드 회전
      gsap.fromTo(
        '.characterCard',
        { autoAlpha: 0, rotationY: '120' },
        {
          autoAlpha: 1,
          rotationY: '0',
          duration: 2,
          ease: 'elastic.out',
          scrollTrigger: {
            trigger: '.characterCard',
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none none',
            // markers: true,
          },
        },
      )
    })
    setFirstMount(false)
    return () => point.revert()
  }, [circleData])

  return (
    <Container fluid className="character">
      <Container className="inner">
        <Row className="content">
          <Col lg={6} md={12} className="col">
            <div ref={characterRef}>
              <h1>
                요즘 대세
                <br /> 캐릭터 체크카드
              </h1>
              <p>보면 볼수록 귀여운 캐릭터 체크카드를 살펴보세요!</p>

              <div className="selectCircleBox">
                {characterData.map((character, index) => (
                  <div
                    className="selectCircle"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + character.image})` }}
                    key={character.id}
                    onClick={() => {
                      setCircleData(character)
                    }}></div>
                ))}
              </div>
            </div>
            <div className="pointBox" ref={pointRef}>
              <div className="cardInfo">
                <Badge>{circleData.bank}</Badge>
                <h3>{circleData.name}</h3>
              </div>
              {circleData.point.map((point, index) => (
                <div key={'point' + index} className={`point point${index}`}>
                  {pointIcon(`${Object.keys(point)}`)}
                  <h5>{Object.values(point)}</h5>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={12} className="card" id="card">
            <Tilt
              className="cardImg characterCard"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + circleData.image})`,
              }}></Tilt>
            <CardBtn data={circleData} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Character
