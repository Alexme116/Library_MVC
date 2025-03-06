import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { FirebaseDao } from './models/DAO/FirebaseDao'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import UserLandPage from './components/Landpage/UserLandpage'
import AdminLandPage from './components/Landpage/AdminLandpage'

function App() {
  const firebaseDao = new FirebaseDao()

  return (
    <Routes>
      <Route path="/" element={<Login firebaseDao={firebaseDao} />} />
      <Route path="/register" element={<Register firebaseDao={firebaseDao} />} />
      <Route path="/userlandpage" element={<UserLandPage firebaseDao={firebaseDao} />} />
      <Route path="/adminlandpage" element={<AdminLandPage firebaseDao={firebaseDao} />} />
    </Routes>
  )
}

export default App
