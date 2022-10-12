import React from 'react'
import './styles.css'

export default function Title(props) {
  return (
    <div className='title-container'>
        <div className='box-step'>
           <div className='text'>
                <span>ETAPA</span>
                <p>{props.number}</p>
            </div>
        </div>
        <div className='title-text'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
