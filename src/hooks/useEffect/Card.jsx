import React from "react";

const Card = ({ item }) => {
  const { strCategory, strAlcoholic, strDrink, strDrinkThumb } = item;
  return (
    <div className="grid grid-cols-3 my-3">
      <img src={strDrinkThumb} alt="" />
      <h1>{strDrink}</h1>
      <h3>{strAlcoholic}</h3>
    </div>
  );
};

export default Card;
