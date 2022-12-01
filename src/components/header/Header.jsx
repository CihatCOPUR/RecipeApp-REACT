import React from "react";


const Header = ({ setQuery, getData, setSelectedMeal, mealType }) => {

const handleSubmit=(e)=>{
  e.preventDefault();
  getData();
}

  return (
    <center>
      <form className="header" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <select
          name="mealType"
          id="mealType"
          value=""
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value={meal}>
              {meal}
            </option>
          ))}
        </select>
        <button type="submit">SEARCH</button>
      </form>
      
    </center>
  );
};

export default Header;
