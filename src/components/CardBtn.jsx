import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBtn.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putCardBox } from '../redux/cardBoxSlice'

const CardBtn = ({ data }) => {
  const navigate = useNavigate()
  //redux
  const dispatch = useDispatch()
  const handlePutCardBox = (info) => {
    dispatch(putCardBox(info))
  }
  //현재 데이터가 이미 박스에 담겼는지 확인한다.
  const cardBox = useSelector((state) => state.cardBoxSlice.value)
  const findId = (data) => {
    cardBox.some((item) => item.id === data.id)
    if (findId) {
      return true
    } else {
      return false
    }
  }
  console.log(cardBox)
  // console.log(data)
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
        }}>
        <AiOutlineInbox strokeWidth="20" />
        &nbsp;카드 비교
      </Button>
    </div>
  )
}

export default CardBtn
