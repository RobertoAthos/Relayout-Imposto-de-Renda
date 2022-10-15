import React from 'react'
import './styles.css'
import img from '../../Assets/Grupo 215.png'
import Transition from "../../Components/Transition/Transition";

export default function End() {
  return (
    <Transition className='right'>
    <section className='end-section'>
    <div className='end-container'>
      <div className='end-img'>
          <img src={img} alt='Desenho'/>
      </div>
      <div className='end-text'>
          <h3>Oba ! Finalizamos <br/> o tutorial de declaração :D</h3>
          <p>Não esqueça de fazer seu irpf !</p>
      </div>
    </div>
</section>
    </Transition>
  )
}
