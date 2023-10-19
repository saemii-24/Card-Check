import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineInbox } from 'react-icons/ai'

import { FaRegCreditCard } from 'react-icons/fa'
import './Header.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import cn from 'classnames'

const Header = ({ color }) => {
  let [search, setSearch] = useState(false)
  const navigate = useNavigate()
  const location = useLocation().pathname
  console.log(location)
  console.log(color)
  return (
    <div className="header">
      <Navbar
        className={cn('search--normal', {
          hidden: search,
        })}>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/')
            }}>
            <div className={cn('logo', { white: color && location === '/' })}></div>
          </Navbar.Brand>
          <Nav className="me-auto nav__right">
            <Nav.Link
              className="tooltip--card"
              onClick={() => {
                navigate('/cardSearch')
              }}>
              <FaRegCreditCard
                style={{ cursor: 'pointer' }}
                className={cn('cardIcon', { white: color && location === '/' })}
              />
            </Nav.Link>
            <Nav.Link
              className="tooltip--box"
              onClick={() => {
                navigate('/cardBox')
              }}>
              <AiOutlineInbox
                style={{ cursor: 'pointer' }}
                className={cn('boxIcon', { white: color && location === '/' })}
              />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="tooltip--search">
              <FiSearch
                style={{ cursor: 'pointer' }}
                onClick={() => setSearch(true)}
                className={cn('searchIcon', { white: color && location === '/' })}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className={cn('searchAll', {
          active: search,
        })}>
        <Navbar className="search--click">
          <Container>
            <Navbar.Brand href="#home">
              <div
                style={{
                  width: '55px',
                  height: '30px',
                  backgroundImage: `url(${process.env.PUBLIC_URL + `/image/logo--white.png`})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
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
                  <li>영화 할인</li>
                  <li>OTT 할인</li>
                  <li>뷰티 할인</li>
                  <li>커피숍 할인</li>
                  <li>교통 할인</li>
                </ul>
              </div>
              <div className="recentBox">
                <h6>최근 검색어가 없습니다.</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header
