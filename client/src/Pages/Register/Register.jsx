import React from 'react'
import RegisterForm from '../../Components/FormRegister/RegisterForm'
import './styles.css'
import RF2 from '../../Assets/receita federal 02.png'

export default function Register() {
  return (
    <section className='register-section'>
        <div className='register-container'>
            <div className='form-register'>
            <div className='logo'>
                <img src={RF2} alt='logo receita federal'/>
              </div>
                <RegisterForm/>
            </div>
        </div>
    </section>
  )
}
