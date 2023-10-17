import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Category.scss'
const Category = () => {
  return (
    <>
      <Container fluid className="category">
        <Container className="inner">
          <h1>인기 혜택 카드 모아보기</h1>
          <p className="subtitle">Card Check 사용자가 가장 많이 찾아본 혜택을 알아보세요.</p>
          <Container>
            <Row>
              <Col xxl={2} xl={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-1.jpg)`,
                  }}>
                  <p>
                    교통비 인상에 대비하자! <b>교통 할인 카드</b>&#x1F68C; 모음
                  </p>
                </div>
              </Col>
              <Col xxl={2} xl={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-3.jpg)`,
                  }}>
                  <p>
                    <b>영화관 할인 카드</b>&#x1F3A5;로 문화생활도 부담없이!
                  </p>
                </div>
              </Col>
              <Col xxl={2} xl={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-4.jpg)`,
                  }}>
                  <p>
                    커피한잔으로 즐기는 여유&#9749; <b>커피숍 할인 카드</b> 모아보기
                  </p>
                </div>
              </Col>

              <Col xxl={2} lg={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-2.jpg)`,
                  }}>
                  <p>
                    <b>편의점</b>&#x1F3EA;에 가면 도시락도 있고&#9836; <b>할인 카드</b>도 쓸 수
                    있어요
                  </p>
                </div>
              </Col>

              <Col xxl={2} lg={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-5.jpg)`,
                  }}>
                  <p>
                    해외여행도 문제없지! <b>해외 결제 할인 카드</b>&#x1F6EB; 모음
                  </p>
                </div>
              </Col>
              <Col xxl={2} lg={4} md={6}>
                <div
                  className="popularCategory"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/benefitBg-6.jpg)`,
                  }}>
                  <p>
                    이번 주말, 동심에 퐁당 빠져봐요! <b>놀이공원 할인 카드</b>&#127905; 모음
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Category
