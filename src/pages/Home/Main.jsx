import React from 'react'
import './Main.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <>
      <Container fluid className="main">
        <Row>
          <Col className="right col-lg-5">1 of 2</Col>
          <Col className="left col-lg-7">2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default Main
