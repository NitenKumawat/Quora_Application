import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ASKQues from './components/ASKQues'
import Notification from './pages/Notification'

const App = () => {
  return (
   <>
  

   <Routes>

  <Route path="/" element={<Home/>} /> 

     
    <Route path="/addQuestion" element={<ASKQues/>} />
    <Route path="/notification" element={<Notification/>} />
   </Routes>
   
 
   </>
  )
}

export default App
