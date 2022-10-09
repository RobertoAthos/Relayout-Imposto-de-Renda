import React from 'react'
import './styles.css'
import RF from '../../Assets/receita federal 01.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
      <section className='home-bg'>
          <div className='home-container'>
             <div className='logo'>
                <img src={RF} alt='receita federal logo'/>
             </div>
             <div className='home-text'>
               <h2>Aprenda a declarar seu Importo de Renda passo a passo.</h2>
             </div>
             <div className='btn'>
                <Link to='/login'><button>Começar <AiOutlineArrowRight className='icon'/></button></Link>
             </div>
          </div>
      </section>
  )
}
