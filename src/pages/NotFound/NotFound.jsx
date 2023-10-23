import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './NotFound.scss'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container className="notFound">
      <Row>
        <Col>
          <img
            className="notFoundImg"
            src={`${process.env.PUBLIC_URL}/image/NotFound.svg`}
            alt="페이지를 찾을 수 없습니다."
          />
          <h4>페이지를 찾을 수 없습니다.</h4>
          <p>
            페이지의 주소가 잘못 입력되었거나 요청하신 페이지의 주소가 <br /> 변경, 삭제되어 사용할
            수 없는 페이지입니다.
          </p>
          <div className="navigationBtn">
            <Button
              className="goHome"
              onClick={() => {
                navigate('/')
              }}>
              홈으로
            </Button>
            <Button
              className="goSearch"
              onClick={() => {
                navigate('/cardSearch')
              }}>
              카드 찾기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
