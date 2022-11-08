import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';

const Home = () => {

  const APP_ID=`90da419b`;
  const APP_KEY=`af2bd5bfdcaf49b896fc9dce958c73bc`
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const mealType=["Breakfast","Launch","Dinner","Snack","TeaTime"]
  
  const [recipes, setRecipes] = useState("")

  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

 
  const getData=async()=>{

    const {data}= await axios(url);
   setRecipes(data.hits)
   
  }

console.log(recipes)
  useEffect(() => {
    
  getData();
    
  }, [])
  

  return (
    <div className='home'>

      <Header setQuery={setQuery} getData={getData} setSelectedMeal={setSelectedMeal} mealType={mealType}/>
      
    </div>
  )
}

export default Home
