import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiArrowSmallRight } from 'react-icons/hi2'
import { FaRegCreditCard } from 'react-icons/fa'
import './Header.scss'
import { Link } from 'react-router-dom'
// Feather, Ant Design Icons, Heroicons 2 아이콘이 사용되었습니다.

const Header = () => {
  let [search, setSearch] = useState(false)
  return (
    <div className="header">
      <Navbar className="search--normal">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + '/image/logo--black.png'}
              alt="cardCheck 로고"
              style={{ height: '30px' }}
            />
          </Navbar.Brand>
          <Nav className="me-auto nav__right">
            <Nav.Link as={Link} to="/">
              <FaRegCreditCard style={{ cursor: 'pointer' }} className="cardIcon" />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FiSearch
                style={{ cursor: 'pointer' }}
                onClick={() => setSearch(true)}
                className="searchIcon"
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {search && (
        <div className="searchAll">
          <Navbar className="search--click">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={process.env.PUBLIC_URL + '/image/logo--white.png'}
                  alt="cardCheck 로고"
                  style={{ height: '30px' }}
                />
              </Navbar.Brand>
              <div className="inputBox">
                <input type="text" placeholder="카드와 혜택을 검색해보세요!" autoFocus={true} />
                <FiSearch style={{ cursor: 'pointer' }} className="searchIcon" />
              </div>
              <AiOutlineClose
                style={{ cursor: 'pointer' }}
                onClick={() => setSearch(false)}
                className="closeIcon"
              />
            </Container>
          </Navbar>
          <Container fluid className="search__bg">
            <div className="search__detail">
              <div>
                <div className="popular">
                  <h4>인기 검색어</h4>
                  <ul>
                    <li>
                      <HiArrowSmallRight className="arrowIcon" />
                      영화 할인
                    </li>
                    <li>
                      <HiArrowSmallRight className="arrowIcon" />
                      OTT 할인
                    </li>
                    <li>
                      <HiArrowSmallRight className="arrowIcon" />
                      뷰티 할인
                    </li>
                    <li>
                      <HiArrowSmallRight className="arrowIcon" />
                      커피숍 할인
                    </li>
                    <li>
                      <HiArrowSmallRight className="arrowIcon" />
                      교통 할인
                    </li>
                  </ul>
                </div>
                <h6>최근 검색어가 없습니다.</h6>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}

export default Header
