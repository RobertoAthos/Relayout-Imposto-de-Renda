import React,{useState} from 'react'
import './styles.css'
import {useDispatch,useSelector} from 'react-redux'
import {userRegister} from '../../redux/actions/authAction'

export default function RegisterForm() {

  const dispatch = useDispatch()
  const state= useSelector(state=>state)
  const[user,setUser] = useState({
    email: '',
    fullName: '',
    cpf: '' ,
    date: '',
    password: ''
  })

  const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(userRegister(user))
      setUser({
        email: '',
        fullName: '',
        cpf: '' ,
        date: '',
        password: ''
      })
  }

  return (
        <form className='register-form' onSubmit={handleSubmit}>    
            <input 
            type={'email'}
             placeholder='Email' 
             value={user.email} 
             onChange={(e)=>setUser({...user, email:e.target.value})}
             />
            <input 
            type={'text'} 
            placeholder='Nome Completo' 
            value={user.fullName} 
            onChange={(e)=> setUser({...user, fullName: e.target.value})}
            />
            <input 
            type={'text'} 
            placeholder='Cpf' 
            value={user.cpf} 
            onChange={(e)=> setUser({...user, cpf: e.target.value})}
            />
            <input 
            type={'date'}
             placeholder='Data de Nascimento' 
             value={user.date}
             onChange={(e)=> setUser({...user, date: e.target.value})}
             />
            <input 
            type={'password'} 
            placeholder='Senha' 
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})}
            />
            <div className='btn-register'><button className='register-btn'>Cadastrar-se</button></div>
        </form>
  )
}
