import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredient.module.css';

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
      bIngredient = <div className={classes.Meat}></div>;
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
    case ('fish'):
      bIngredient = <div className={classes.Fish}></div>;
      break;
    default:
      bIngredient = null;
  }
  return bIngredient;
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ingredient;