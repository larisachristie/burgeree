import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Fish', type: 'fish' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <div className={classes.ButtonsGroup}>
      <p>Total: <strong>${props.total.toFixed(2)}</strong></p>
      <label>Build your burger with:</label>
      {controls.map((item, index) => (
        <BuildControl
        key={item.label + index}
        label={item.label}
        adder={() => props.adder(item.type)}
        remover={() => props.remover(item.type)}
        disabled={props.disabled[controls.type]}/>
      ))}
      </div>
      <div className={classes.ButtonsGroup}>
      <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.handleOrderButtonClick}
      >ORDER</button>
      <button
      className={classes.ResetButton}
      disabled={!props.purchaseable}
      onClick={props.handleResetButtonClick}>
      RESET</button>
      </div>
    </div>
  )
};

export default buildControls;