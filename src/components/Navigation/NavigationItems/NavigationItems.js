import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {
  return (
  <ul className={classes.NavigationItems}>
    <NavigationItem active link="/">Burger Constructor</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
  )
};

export default navigationItems;