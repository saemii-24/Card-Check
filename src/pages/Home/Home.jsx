import React, { useState } from 'react'
import Main from '../Home/Main'
import Category from '../Home/Category'
import Top from '../Home/Top'
import MdPick from '../Home/MdPick'
import Character from '../Home/Character'

const Home = ({ setColor }) => {
  //header색상변경
  return (
    <>
      <Main setColor={setColor} />
      <Category />
      <Top />
      <MdPick />
      <Character />
    </>
  )
}

export default Home
