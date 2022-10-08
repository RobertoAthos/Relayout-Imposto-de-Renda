import React from 'react'
import './styles.css'

export default function LoginForm() {
    return (
        <div className='inputs'>´
            <form className='form'>
                <label>CPF</label>
                <input type={'text'} placeholder='000.000.000-00' />
                <label>SENHA</label>
                <input type={'password'} placeholder='XXXXXXXXXX' />
            </form>
        </div>
    )
}
