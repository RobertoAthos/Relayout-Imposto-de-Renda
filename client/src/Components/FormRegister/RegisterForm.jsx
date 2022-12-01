import React, { useState } from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../redux/actions/authAction'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function RegisterForm() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const [user, setUser] = useState({
    email: '',
    fullName: '',
    cpf: '',
    data: '',
    password: ''
  })

  const[loading,setLoading] = useState(false)

  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      dispatch(userRegister(user))
      setUser({
        email: '',
        fullName: '',
        cpf: '',
        data: '',
        password: ''
      })
      setLoading(true)
    } catch (error) {
      toast('Erro na hora de fazer Cadastro', {
        position: toast.POSITION.TOP_RIGHT
      })
      console.log(error)
    }
  }

  return (
    <>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          type={'email'}
          placeholder='Email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type={'text'}
          placeholder='Nome Completo'
          value={user.fullName}
          onChange={(e) => setUser({ ...user, fullName: e.target.value })}
        />
        <input
          type={'text'}
          placeholder='Cpf'
          value={user.cpf}
          onChange={(e) => setUser({ ...user, cpf: e.target.value })}
        />
        <input
          type={'date'}
          placeholder='Data de Nascimento'
          value={user.date}
          onChange={(e) => setUser({ ...user, data: e.target.value })}
        />
        <input
          type={'password'}
          placeholder='Senha'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {loading ? <Loading/> : <div className='btn-register'><button className='register-btn'>Cadastrar-se</button></div>}
        <Link to='/login'>Já tem conta ? Então faça o login</Link>
      </form>
      <ToastContainer />
    </>
  )
}
