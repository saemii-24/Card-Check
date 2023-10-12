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
        <Route path="/" element={<Home />} />
        <Route path="/cardSearch" element={<CardSearch />} />
        <Route path="/cardDetail/:id" element={<CardDetail />} />
      </Routes>
    </>
  )
}

export default App
