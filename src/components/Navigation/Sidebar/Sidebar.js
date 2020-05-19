import React from 'react';
import classes from './Sidebar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidebar = props => {
  let dynamicClasses = [classes.Sidebar];
  if (props.sidebarToggled) {
    dynamicClasses.push(classes.Open);
  } else {
    dynamicClasses.push(classes.Closed);
  }
  return (
    <Aux>
      <Backdrop
      show={props.sidebarToggled}
      handleClick={props.sidebarToggleHandler}/>
      <div className={dynamicClasses.join(' ')}>
      <div className={classes.Logo}><Logo sidebarToggleHandler={props.sidebarToggleHandler} /></div>
      <NavigationItems />
    </div>
    </Aux>
  );
}

export default sidebar;