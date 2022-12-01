import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = ({recipes}) => {
  
  return (
    <div className='card' >
      {recipes.map(({recipe},index)=>(
        <div key={index} className="indexDiv"> 
          <Card className='card1'>
      
      <center className='card2'>
        <Card.Title>{recipe.label}</Card.Title>
        <img src={recipe.image} alt="" />
        <Button  variant="primary">Detail</Button>
      </center>
    </Card> 
        </div>
      ))}
        
    </div>
  )
}

export default Cards
