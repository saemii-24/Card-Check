import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBtn.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putCardBox, showFullPopup } from '../redux/cardBoxSlice'

const CardBtn = ({ data }) => {
  const navigate = useNavigate()
  //redux
  const dispatch = useDispatch()
  const handlePutCardBox = (info) => {
    dispatch(putCardBox(info))
  }

  const handleFullPopup = () => {
    dispatch(showFullPopup())
  }

  return (
    <div className="moreButton">
      <Button
        onClick={() => {
          navigate(`/cardDetail/${data.id}`)
        }}>
        + 자세한 혜택
      </Button>
      <Button
        onClick={() => {
          handlePutCardBox(data)
          console.log(data)
          handleFullPopup()
        }}>
        <AiOutlineInbox strokeWidth="20" />
        &nbsp;카드 비교
      </Button>
    </div>
  )
}

export default CardBtn
