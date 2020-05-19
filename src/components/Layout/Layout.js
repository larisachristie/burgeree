import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
  state = {
    sidebarToggled: false,
  };
  sidebarToggleHandler = () => {
    this.setState(prev => {return { sidebarToggled: !prev.sidebarToggled }});
  };
  render () {
    return (
      <Aux>
        <Toolbar sidebarToggleHandler={this.sidebarToggleHandler}/>
        <Sidebar
        sidebarToggleHandler={this.sidebarToggleHandler}
        sidebarToggled={this.state.sidebarToggled}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
)}};

export default Layout;