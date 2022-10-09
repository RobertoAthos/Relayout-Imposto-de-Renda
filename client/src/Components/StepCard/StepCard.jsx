import React from 'react'
import './styles.css'

export default function (props) {
  return (
    <div className='step-box'>
        <span>ETAPA</span>
        <p>{props.number}</p>
    </div>
  )
}
