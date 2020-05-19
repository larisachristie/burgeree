import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.module.css';

const burger = (props) => {
  // get an array of keys
  const endProduct = Object
    .keys(props.ingredients)
    .map(item => {
      return [...Array(props.ingredients[item])]
        .map((_, i) => {
        return <Ingredient key={item + i} type={item} />;
      });
    })
    .reduce((previous, current) => {
      return previous.concat(current);
    }, []);
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {endProduct.length ? endProduct : <p className={classes.Placeholder }>Please add something!</p>}
      <Ingredient type="bread-bottom" />
    </div>
    )
};

export default burger;