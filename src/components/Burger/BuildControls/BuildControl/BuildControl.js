import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <label className={classes.Label}>{props.label}</label>
    <button onClick={props.adder}>+</button>
    <button
      onClick={props.remover}
      disabled={props.disabled}>-</button>
  </div>
);

export default buildControl;