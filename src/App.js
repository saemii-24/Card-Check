import './App.css'
import Home from './pages/Home/Home'
import CardDetail from './pages/CardDetail/CardDetail'
import { Route, Routes } from 'react-router-dom'
import CardBox from './components/CardBox'
import CardSearch from './pages/CardSearch/CardSearch'
import Header from './components/Header/Header'
function App() {
  return (
    <>
      <Header />
      <CardBox />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cardDetail" element={<CardDetail />}></Route>
        <Route path="/cardSearch" element={<CardSearch />}></Route>
      </Routes>
    </>
  )
}

export default App
