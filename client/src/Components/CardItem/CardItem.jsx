import React from 'react'
import './styles.css'

export default function CardItem(props) {
  return (
    <div className='cardItem-bg'>
       <p> {props.name}</p>
    </div>
  )
}
