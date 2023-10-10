import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.scss'
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
//Ant Design Icons
const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Container>
          <Row className="iconRow">
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/image/logo--white.png'}
                alt="cardCheck 로고"
                style={{ height: '30px' }}
              />
            </Col>
            <Col className="snsIcon">
              <FaInstagramSquare />
              <FaFacebookSquare />
              <FaSquareXTwitter />
            </Col>
          </Row>
          <Row className="contentRow">
            <p>
              본 사이트는 개인 포트폴리용으로 제작되었으며 상업용이 아닙니다. 특정 카드 이미지의
              권리는 해당 카드사에 있습니다.
            </p>
            <p>
              본 사이트에는 리액트 아이콘이 사용되었으며, 사용된 아이콘의 종류는 아래와 같습니다.
            </p>
            <ul>
              <li>Ant Design Icons</li>
              <li>Feather</li>
              <li>Heroicons 2</li>
              <li>Font Awesome 5</li>
              <li>Font Awesome 6</li>
            </ul>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer
