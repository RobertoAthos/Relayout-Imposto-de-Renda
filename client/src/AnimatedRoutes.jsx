import React from 'react'
import { AnimatePresence } from "framer-motion";
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Welcome from './Pages/Welcome/Welcome'
import Step1 from './Pages/Steps/Step1/Step1'
import Step2 from './Pages/Steps/Step2/Step2'
import Step3 from './Pages/Steps/Step3/Step3'
import Step4 from './Pages/Steps/Step4/Step4'
import Step5 from './Pages/Steps/Step5/Step5'
import End from './Pages/End/End'

export default function AnimatedRoutes() {

    const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/step1' element={<Step1/>}/>
            <Route path='/step2' element={<Step2/>}/>
            <Route path='/step3' element={<Step3/>}/>
            <Route path='/step4' element={<Step4/>}/>
            <Route path='/step5' element={<Step5/>}/>
            <Route path='/final' element={<End/>}/>
        </Routes>
    </AnimatePresence>
  )
}
