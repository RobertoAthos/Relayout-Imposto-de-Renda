import React from 'react'
import './styles.css'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <section className='welcome-section'>
        <div className='welcome-container'>
            <div className='welcome-text'>
                <h3>Olá "nome", seja Bem Vindo(a)</h3>
                <p>Abaixo terá um vídeo sobre como declarar seu imposto de Renda 2022, <br/> logo em seguida você pode conferir as principais etapas para o seu IRPF</p>
            </div>
            <div className='welcome-video'>
                <iframe width="600" height="315" src="https://www.youtube.com/embed/ThGcnGkx4gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='welcome-text-2'>
                <p>Veja agora as 7 etapas principais para o IRPF</p>
            </div>
            <div className='steps-btn'>
                <Link to='/steps'><Button title='7 Etapas para sua declaração'/></Link>
            </div>
        </div>
    </section>
  )
}