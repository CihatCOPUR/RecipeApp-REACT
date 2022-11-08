import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';

const Home = () => {

  const APP_ID=`90da419b`;
  const APP_KEY=`af2bd5bfdcaf49b896fc9dce958c73bc`
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("")

  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

 
  const getData=async()=>{

    const {data}= await axios(url);
   setRecipes(data.hits)
   
  }


  useEffect(() => {
    
  getData();
    
  }, [])
  

  return (
    <div className='home'>

      <Header/>
      
    </div>
  )
}

export default Home
