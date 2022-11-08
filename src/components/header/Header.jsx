import React from 'react'

const Header = ({setQuery,getData,setSelectedMeal,mealType}) => {
  return (
    <div className='header'>
      
     <center>
      <input type="text" placeholder='SEARCH'  onChange={()=> setQuery()}/>
      <button onClick={()=>getData}>SEARCH</button>
      <select name="mealType" id="mealType" onChange={(e)= setSelectedMeal(e.target.value)}>
       {mealType.map((meal)=>{
        return(
          <option key={meal.index} value={meal}>{meal}</option>
        )
       })}
      </select>
     </center>
    </div>
  )
}

export default Header
