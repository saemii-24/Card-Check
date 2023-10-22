import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row>
        <Col>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => {
              navigate('/')
            }}>
            홈으로
          </Button>
          <Button
            onClick={() => {
              navigate('/cardSearch')
            }}>
            카드 찾기
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
