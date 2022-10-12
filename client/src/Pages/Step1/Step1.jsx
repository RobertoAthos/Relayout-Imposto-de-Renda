import React from 'react'
import CardItem from '../../Components/CardItem/CardItem'
import Title from '../../Components/Title/Title'
import './styles.css'

export default function Step1() {

  return (
    <section className='steps-section'>
        <div className='steps-container'>
            <div className='step-title-container'>
                <Title
                  number='1'
                  title='Movimentações e patrimônios'
                  description= 'Veja todas as opções ao lado que correspondem a atividades de rendas recebidas.'
                />
            </div>
            <div className='step-features'>
                <div className='features'>
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                    <CardItem
                      name='Trabalho CLT'
                    />
                </div>
            </div>
        </div>  
    </section>

  )
}
