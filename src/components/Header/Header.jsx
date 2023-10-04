import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import './Header.scss'
import { Link } from 'react-router-dom'
// Feather, Ant Design Icons 아이콘이 사용되었습니다.
import './Header.scss'

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
              카드 전체보기
            </Nav.Link>
            <FiSearch
              style={{ cursor: 'pointer' }}
              onClick={() => setSearch(true)}
              className="searchIcon"
            />
          </Nav>
        </Container>
      </Navbar>
      {search && (
        <>
          <Navbar className="search--click">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={process.env.PUBLIC_URL + '/image/logo--white.png'}
                  alt="cardCheck 로고"
                  style={{ height: '30px' }}
                />
              </Navbar.Brand>
              <input type="text" placeholder="카드와 혜택을 검색해보세요!" />
              <AiOutlineClose
                style={{ cursor: 'pointer' }}
                onClick={() => setSearch(false)}
                className="closeIcon"
              />
            </Container>
          </Navbar>
          <div className="search__bg"></div>
        </>
      )}
    </div>
  )
}

export default Header
