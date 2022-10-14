import React from 'react'
import Title from '../../../Components/Title/Title'
import '../styles.css'

export default function Step2() {
  return (
    <section className='steps-section'>
          <div className='steps-container'>
              <div className='step-title-container'>
                  <Title
                    number='2'
                    title='Enviar documentos'
                    description='Com base nos dados informados na etapa anterior precisaremos de alguns documentos seus. 
                    Confira e anexe os documentos necessários.'

                  />
              </div>
          </div>
    </section>
  )
}
