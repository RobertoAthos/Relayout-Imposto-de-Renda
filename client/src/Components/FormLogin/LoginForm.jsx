import React, { useState } from 'react'
import './styles.css'
import { Link,useNavigate } from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'
import { userLogin } from '../../redux/actions/authAction'
import {useDispatch, useSelector} from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'


export default function LoginForm() {

    const auth= useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      cpf: "",
      password: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(userLogin(user.cpf, user.password));
      setUser({ cpf: "", password: "" });
    };
      
        if (auth._id) return navigate('/welcome')

    return (
        <div className='inputs'>´
            <form className='form' onSubmit={handleSubmit} >
                <label>CPF</label>
                <input 
                type={'text'} 
                placeholder='000.000.000-00' 
                value={user.cpf}
                onChange={e=>setUser({...user, cpf: e.target.value})}
                />
                <label>SENHA</label>
                <input 
                type={'password'} 
                placeholder='XXXXXXXXXX'
                value={user.password}
                onChange={e=>setUser({...user, password: e.target.value})}
                />
                <div className='buttons'>
                    <div><button type='submit' className='button-login'>Acessar o Sistema <IoIosArrowForward/> </button></div>
                    <Link to='/register' className='link-register'>Ainda não estou cadastrado(a)</Link>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}
