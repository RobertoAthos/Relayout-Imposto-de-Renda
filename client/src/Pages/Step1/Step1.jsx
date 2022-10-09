import React from 'react'
import StepCard from '../../Components/StepCard/StepCard'
import StepTitles from '../../Components/StepTitles/StepTitles'
import './styles.css'

export default function Step1() {
  return (
    <section className='steps-section'>
        <div className='steps-container'>
           <div className='steps-text'>
              <StepCard number='1'/>
              <StepTitles
                title='Movimentações e patrimônio'
                description='Selecione todas as opções ao lado que correspondem a atividades que você realizou e rendas recebidas em 2021.'
              />
           </div>
        </div>
    </section>

  )
}
