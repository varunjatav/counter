import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './pages/counter'
import Timer from './pages/timer'

const Router = () => {
  return (
   <Routes>
    <Route path="/"  element={<Counter/>} />
    <Route path="/timer"  element={<Timer/>} />
   </Routes>
  )
}

export default Router