import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = ({recipes}) => {
  
  return (
    <div className='card' >
      {recipes.map(({recipe},index)=>(
        <div key={index}> 
          <Card style={{ width: '9rem' }}>
      
      <Card.Body>
        <Card.Title>{recipe.label}</Card.Title>
        <img src={recipe.image} alt="" />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
        </div>
      ))}
        
    </div>
  )
}

export default Cards
