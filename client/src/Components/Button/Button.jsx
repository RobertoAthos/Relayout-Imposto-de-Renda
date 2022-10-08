import React from 'react'
import './styles.css'
import {IoIosArrowForward} from 'react-icons/io'

export default function Button(props) {
  return (
    <button className='button'>{props.title} <IoIosArrowForward className='icon'/></button>
  )
}
