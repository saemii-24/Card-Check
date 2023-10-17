import React from 'react'
import './FullPopup.scss'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'
import { Button } from 'react-bootstrap'
import { AiOutlineClose, AiOutlineInbox } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { showFullPopup, closeFullPopup } from '../../redux/cardBoxSlice'

const FullPopup = () => {
  const fullPopup = useSelector((state) => state.cardBoxSlice.fullPopup)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCloseFullPopup = () => {
    dispatch(closeFullPopup())
  }
  return (
    <>
      <div className={cn('FullPopup', { active: fullPopup })}>
        <AiOutlineClose
          className="closeIcon"
          onClick={() => {
            handleCloseFullPopup()
          }}
        />
        <img src={process.env.PUBLIC_URL + '/image/FullPopup.svg'} alt="박스에 담겼습니다." />
        <p>카드 비교함에는 3장의 카드만 담을 수 있습니다.</p>
        <Button
          className="goBoxBtn"
          onClick={() => {
            handleCloseFullPopup()
            navigate('/cardBox')
          }}>
          <AiOutlineInbox strokeWidth="20" />
          &nbsp;카드 비교함
        </Button>
      </div>
    </>
  )
}

export default FullPopup
