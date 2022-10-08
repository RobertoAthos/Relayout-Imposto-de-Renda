import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'


export default function LoginForm() {

    return (
        <div className='inputs'>´
            <form className='form' >
                <label>CPF</label>
                <input type={'text'} placeholder='000.000.000-00' />
                <label>SENHA</label>
                <input type={'password'} placeholder='XXXXXXXXXX' />
                <div className='buttons'>
                    <div><button type='submit' className='button-login'>Acessar o Sistema <IoIosArrowForward/> </button></div>
                    <Link to='/register' className='link-register'>Ainda não estou cadastrado(a)</Link>
                </div>
            </form>
        </div>
    )
}
