import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import UserLandPage from './components/Landpage/UserLandpage'
import AdminLandPage from './components/Landpage/AdminLandpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/userlandpage" element={<UserLandPage/>} />
      <Route path="/adminlandpage" element={<AdminLandPage/>} />
    </Routes>
  )
}

export default App
