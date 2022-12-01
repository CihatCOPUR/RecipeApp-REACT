import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const {state}=useLocation();
  console.log(state)
  return (
    <center className="detail">
      <h1>{state.label}</h1>
      
    
      <img src={state.image} alt="" />
      <p>{state.ingredientLines
}</p>
    </center>
  )
}

export default Detail
