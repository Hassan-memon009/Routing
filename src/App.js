import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'hero'} element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
