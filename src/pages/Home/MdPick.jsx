import React, { useState, useRef, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import './MdPick.scss'
import mdPickData from '../../data/mdPickData'
import cn from 'classnames'

const MdPick = () => {
  let [slideActiveForward, setslideActiveForward] = useState(false)
  let [slideActiveBack, setslideActiveBack] = useState(false)
  let [slideData, setslideData] = useState(mdPickData)

  const handleSlideBack = () => {
    setTimeout(() => {
      let newSlide = [...slideData]
      let cutFirstSlide = newSlide.slice(0, 1)
      newSlide.shift()
      newSlide.push(cutFirstSlide[0])
      setslideData(newSlide)
      setslideActiveBack(false)
    }, 1000)
  }
  const handleSlideForward = () => {
    setTimeout(() => {
      let newSlide = [...slideData]
      let cutFirstSlide = newSlide.slice(0, 1)
      newSlide.shift()
      newSlide.push(cutFirstSlide[0])
      setslideData(newSlide)
      setslideActiveForward(false)
    }, 1000)
  }

  return (
    <>
      <Container fluid className="mdPick">
        <Container className="inner">
          <div
            className="paginationBack pagination"
            onClick={() => {
              handleSlideBack()
              setslideActiveBack(true)
            }}>
            <IoChevronBack />
          </div>

          <div className="slideWrapper">
            {slideData.map((slide, index) => (
              <div key={slide.id} className="slide">
                <div
                  className={cn(`slideContent slideContent_${index + 1}`, {
                    activeBack: slideActiveBack,
                    activeForward: slideActiveForward,
                  })}>
                  <img src={process.env.PUBLIC_URL + slide.image} alt={slide.id} />
                  <div className="slideText">
                    <h5
                      className={cn(`subTitle ${index + 1}`, {
                        active: slideActiveBack || slideActiveForward,
                      })}>
                      {slide.subtitle}
                    </h5>
                    <h3
                      className={cn(`title ${index + 1}`, {
                        active: slideActiveBack || slideActiveForward,
                      })}>
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="paginationForward pagination"
            onClick={() => {
              handleSlideForward()
              setslideActiveForward(true)
            }}>
            <IoChevronForward />
          </div>
        </Container>
      </Container>
    </>
  )
}

export default MdPick
