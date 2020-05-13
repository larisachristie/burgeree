import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const burger = (props) => {
  // get an array of keys
  const transformedIngredients = Object
    .keys(props.ingredients)
    .map(item => {
      return [...Array(props.ingredients[item])]
        .map((_, i) => {
        return <Ingredient key={item + i} type={item} />;
      });
    });
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
    )
};

export default burger;