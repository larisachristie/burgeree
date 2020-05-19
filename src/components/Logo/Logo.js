import React from 'react';
import classes from './Logo.module.css';
import logoPic from '../../assets/images/logo.png';

const logo = props => (
  <div className={classes.Logo}
  style={{ height: props.height }}
  onClick={props.sidebarToggleHandler}>
    <img src={logoPic} alt="logo" />
  </div>
);

export default logo;