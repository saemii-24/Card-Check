import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
      }}>
      <HashLoader color={'#007aff'} />
    </div>
  )
}

export default Loading
