import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render () {
  const order = Object
    .keys(this.props.ingredients)
    .map(item => {
      return (
      <li key={item + this.props.ingredients[item]}><span
      style={{ textTransform: 'capitalize' }}>{item}</span> x {this.props.ingredients[item]}</li>
      )
  });
  return (
    <Aux>
    <p>Your order:</p>
    <ul>{order}</ul>
    <p>Total price: ${this.props.total.toFixed(2)}</p>
    <Button
    btnType="Danger"
    handleClick={this.props.handleCancel}>Cancel</Button>
    <Button
    btnType="Success"
    handleClick={this.props.handleProceedToCheckout}>Proceed to checkout</Button>
    </Aux>
  )
}};

export default OrderSummary;