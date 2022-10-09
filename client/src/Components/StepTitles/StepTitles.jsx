import React from 'react'
import './styles.css'

export default function StepTitles(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}
