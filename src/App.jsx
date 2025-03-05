import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandPage from './components/Landpage/Landpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage/>} />
    </Routes>
  )
}

export default App
