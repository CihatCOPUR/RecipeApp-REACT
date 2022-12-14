import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Cards = ({recipes}) => {
  const navigate= useNavigate();
  
  return (
    <Container className='card' wrap="wrap" >
      {recipes.map(({recipe},index)=>(
        <div key={index} className="indexDiv"> 
          <Card className='card1'>
      
      <center className='card2'>
        <Card.Title className='cardTitle'>{recipe.label}</Card.Title>
        <img src={recipe.image} alt="" />
        <Button  onClick={()=>navigate("detail",{state:recipe , replace:false})} variant="primary">Detail</Button>
      </center>
    </Card> 
        </div>
      ))}
        
    </Container>
  )
}

export default Cards
