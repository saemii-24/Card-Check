import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBtn.scss'
const CardBtn = () => {
  return (
    <div className="moreButton">
      <Button>+ 자세한 혜택</Button>
      <Button>
        <AiOutlineInbox strokeWidth="20" />
        &nbsp;카드 비교
      </Button>
    </div>
  )
}

export default CardBtn
