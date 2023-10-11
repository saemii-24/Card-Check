import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBox.scss'

const CardBox = () => {
  const navigate = useNavigate()
  return (
    <>
      <Link to="/cardDetail">
        <div
          className="cardBoxBtn"
          // onClick={() => {
          //   navigate('/cardDetail')
          // }}
        >
          <div className="content">
            <p>카드 비교하기</p>
            <AiOutlineInbox />
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardBox
