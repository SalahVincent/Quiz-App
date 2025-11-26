import React from 'react'
import Start from './routes/Start'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz from './routes/Quiz'
import Score from './routes/Score'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/quiz/' element={<Quiz />} />
      <Route path='/result/' element={<Score />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
