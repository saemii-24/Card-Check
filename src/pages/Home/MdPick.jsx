import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import './MdPick.scss'
const MdPick = () => {
  const backIcon = useRef(null);
  console.log(backIcon);
  return (
    <>
      <Container fluid className="mdPick">
        <Container>
          <IoChevronBack className="pagination paginationBack" ref={backIcon} />
          <div className="slide" style={{ backgroundImage: 'url(/image/MdPickBg-1.jpg)' }}>
            <div className="slideContent">
              <p>Md Pick!</p>
              <h3>요즘 대학생들은 이 카드를 가장 많이 사용한다면서요?</h3>
            </div>
          </div>
          <div className="slide active" style={{ backgroundImage: 'url(/image/MdPickBg-2.jpg)' }}>
            <div className="slideContent">
              <p>주간랭킹 TOP100</p>
              <h3>이번주 Card Check 사용자가 가장 많이 찾아 본 카드 100선!</h3>
            </div>
          </div>
          <div className="slide" style={{ backgroundImage: 'url(/image/MdPickBg-3.jpg)' }}>
            <div className="slideContent">
              <p>Card Check 뉴스레터</p>
              <h3>알뜰 교통카드 A to Z</h3>
            </div>
          </div>
          <IoChevronForward className="pagination paginationForward" />
        </Container>
      </Container>
    </>
  )
}

export default MdPick
