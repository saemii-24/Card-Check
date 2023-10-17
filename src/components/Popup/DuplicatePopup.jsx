import React from 'react'
import './DuplicatePopup.scss'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'
import { AiOutlineClose, AiOutlineInbox } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import { closeDuplicatePopup } from '../../redux/cardBoxSlice'
import { useNavigate } from 'react-router-dom'

const DuplicatePopup = () => {
  const duplicatePopup = useSelector((state) => state.cardBoxSlice.duplicatePopup)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDuplicatePopup = () => {
    dispatch(closeDuplicatePopup())
  }
  return (
    <>
      <div className={cn('DuplicatePopup', { active: duplicatePopup })}>
        <AiOutlineClose
          className="closeIcon"
          onClick={() => {
            handleDuplicatePopup()
          }}
        />
        <img src={process.env.PUBLIC_URL + '/image/DuplicatePopup.svg'} alt="박스에 담겼습니다." />
        <p>이미 카드 비교함에 담긴 카드입니다.</p>
        <Button
          className="goBoxBtn"
          onClick={() => {
            handleDuplicatePopup()
            navigate('/cardBox')
          }}>
          <AiOutlineInbox strokeWidth="20" />
          &nbsp;카드 비교함
        </Button>
      </div>
    </>
  )
}

export default DuplicatePopup
