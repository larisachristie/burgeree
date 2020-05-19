import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo height="80%" sidebarToggleHandler={props.sidebarToggleHandler} />
    <div hidden>MENU</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;