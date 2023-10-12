import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
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
      <Footer />
    </>
  )
}

export default Home
