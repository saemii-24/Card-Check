import React, { useState, useRef, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import './MdPick.scss'
import mdPickData from '../../data/mdPickData'
import cn from 'classnames'

const MdPick = () => {
  const [slideCount, setslideCount] = useState(1)
  const [slideData, setslideData] = useState(mdPickData)

  const handleSlideTag = () => {
    let cutFirstSlide = [...slideData].slice(0)
    let newSlide = [...slideData].shift()

    console.log(newSlide)
  }
  handleSlideTag()
  return (
    <>
      <Container fluid className="mdPick">
        <Container className="inner">
          <div className="paginationBack pagination">
            <IoChevronBack />
          </div>

          <div className="slideWrapper">
            {slideData.map((slide, index) => (
              <div key={slide.id} className="slide">
                <div className="slideContent">
                  <img src={process.env.PUBLIC_URL + slide.image} alt={slide.id} />
                  <div className="slideText">
                    <h5>{slide.subtitle}</h5>
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="paginationForward pagination">
            <IoChevronForward />
          </div>
        </Container>
      </Container>
    </>
  )
}

export default MdPick
