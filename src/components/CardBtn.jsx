import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBtn.scss'
import { useNavigate } from 'react-router-dom'

const CardBtn = ({ id }) => {
  const navigate = useNavigate()
  return (
    <div className="moreButton">
      <Button
        onClick={() => {
          navigate(`/cardDetail/${id}`)
        }}>
        + 자세한 혜택
      </Button>
      <Button>
        <AiOutlineInbox strokeWidth="20" />
        &nbsp;카드 비교
      </Button>
    </div>
  )
}

export default CardBtn
