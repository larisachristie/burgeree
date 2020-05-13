import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredient.css';

const ingredient = (props) => {
  let bIngredient = null;
  switch (props.type) {
    case ('bread-bottom'):
      bIngredient = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      bIngredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      bIngredient = <div style={{ backgroundColor: 'red', width: '10px', height: '10px'}} className={classes.Meat}></div>;
      break;
    case ('cheese'):
      bIngredient = <div className={classes.Cheese}></div>;
      break;
    case ('salad'):
      bIngredient = <div className={classes.Salad}></div>;
      break;
    case ('bacon'):
      bIngredient = <div className={classes.Bacon}></div>;
      break;
    default:
      bIngredient = null;
  }
  console.log(bIngredient);
  return bIngredient;
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ingredient;