import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Main from '../Home/Main'
import Category from '../Home/Category'
import Top from '../Home/Top'
import Company from '../Home/Company'

const Home = () => {
  //header색상변경
  let [header, setHeader] = useState(false)
  return (
    <>
      <Header />
      <Main header={header} setHeader={setHeader} />
      <Category />
      {/* <Top />
      <Company /> */}
    </>
  )
}

export default Home
