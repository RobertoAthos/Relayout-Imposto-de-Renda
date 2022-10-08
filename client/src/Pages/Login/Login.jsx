import React from 'react'
import './styles.css'
import RF2 from '../../Assets/receita federal 02.png'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import LoginForm from '../../Components/FormLogin/LoginForm'


export default function Login() {
  return (
    <section className='login-section'>
        <div className='login-container'>
          <div className='form-container'>
              <div className='logo'>
                <img src={RF2} alt='logo receita federal'/>
              </div>
              <div className='text-title'>
                  <h2>Seja Bem Vindo(a) ao <br/> Novo Imposto de Renda!</h2>
              </div>
              <LoginForm/>
              <div className='buttons'>
                <Link to='/register' className='link-register'>Ainda não estou cadastrado(a)</Link>
                <Link><Button title='Acessar o Sistema'/></Link>
              </div>
          </div>
          
        </div>
    </section>
  )
}
