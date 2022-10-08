import React from 'react'
import Button from '../Button/Button'
import './styles.css'

export default function RegisterForm() {
  return (
        <form className='register-form'>    
            <input type={'email'} placeholder='Email'/>
            <input type={'text'} placeholder='Nome Completo'/>
            <input type={'text'} placeholder='Cpf'/>
            <input type={'date'} placeholder='Data de Nascimento'/>
            <input type={'password'} placeholder='Senha'/>
            <div className='btn-register'><button className='register-btn'>Cadastrar-se</button></div>
        </form>
  )
}
