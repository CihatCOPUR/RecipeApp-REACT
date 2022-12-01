import React from "react";

const Header = ({ setQuery, getData, setSelectedMeal, mealType }) => {
  return (
    <form className="header" onSubmit={getData}>
      <center>
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">SEARCH</button>
        <select
          name="mealType"
          id="mealType"
          value=""
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal,index) => (
            <option key={index} value={meal}>
              {meal}
            </option>
          ))}
        </select>
      </center>
    </form>
  );
};

export default Header;
