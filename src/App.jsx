import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

import Notification from './pages/Notification'

const App = () => {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/clipboard" element={<Home />} />
        <Route path="/group" element={<Home />} />
      </Routes>


    </>
  )
}

export default App
