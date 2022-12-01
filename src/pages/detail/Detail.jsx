import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const {state}=useLocation();
  console.log(state)
  return (
    <center className="detail">
      <h1>{state.label}</h1>
      <h4></h4>
      <p>{state.ingredientLines
}</p>
      <img src={state.image} alt="" />
    </center>
  )
}

export default Detail
