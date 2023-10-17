import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInbox } from 'react-icons/ai'
import './CardBoxBtn.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCardBox } from '../redux/cardBoxSlice'
import { AiFillCloseCircle } from 'react-icons/ai'
const CardBoxBtn = () => {
  const cardBox = useSelector((state) => state.cardBoxSlice.value)
  const dispatch = useDispatch()
  const handleDeleteCardBox = (info) => {
    dispatch(deleteCardBox(info))
  }
  console.log(cardBox)
  return (
    <>
      <Link to="/cardBox">
        <div className="cardBoxBtn">
          <div className="boxNull">
            <AiOutlineInbox />
            <p>카드 비교함</p>
          </div>
          {cardBox.length > 0 && (
            <div className="boxImg">
              {cardBox.map((data) => (
                <div className="cardAlign" key={data.id}>
                  <div
                    className="cardImg"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}></div>
                  <div
                    className="cardClose"
                    onClick={(e) => {
                      e.preventDefault()
                      handleDeleteCardBox(data)
                    }}>
                    <AiFillCloseCircle />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </>
  )
}

export default CardBoxBtn
