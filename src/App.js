import './App.css'
import Home from './pages/Home/Home'
import CardDetail from './pages/CardDetail/CardDetail'
import { Route, Routes } from 'react-router-dom'
import CardBox from './components/CardBox'
function App() {
  return (
    <>
      <CardBox />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cardDetail" element={<CardDetail />}></Route>
      </Routes>
    </>
  )
}

export default App
