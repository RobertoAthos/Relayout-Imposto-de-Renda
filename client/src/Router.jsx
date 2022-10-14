import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Welcome from './Pages/Welcome/Welcome'
import Step1 from './Pages/Steps/Step1/Step1'
import Step2 from './Pages/Steps/Step2/Step2'

export default function Router() {
  return (
   <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/step1' element={<Step1/>}/>
        <Route path='/step2' element={<Step2/>}/>
   </Routes>
  )
}
