import React, { useState } from 'react'
import Main from '../Home/Main'
import Category from '../Home/Category'
import Top from '../Home/Top'
import MdPick from '../Home/MdPick'
import Character from '../Home/Character'

const Home = () => {
  //header색상변경
  let [header, setHeader] = useState(false)
  return (
    <>
      <Main header={header} setHeader={setHeader} />
      <Category />
      <Top />
      <MdPick />
      <Character />
    </>
  )
}

export default Home
