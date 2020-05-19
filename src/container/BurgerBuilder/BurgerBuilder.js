import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  cheese: 2,
  meat: 3,
  fish: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      fish: 0,
    },
    totalAmount: 0,
    purchaseable: false,
    orderButtonClicked: false,
  };
  updatePurchaseState = (ingredients) => {
    const sum = Object
      .keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {return sum + element}, 0);
    this.setState({ ingredients, purchaseable: sum > 0 });
  };
  addHandler = type => {
    const prev = this.state.ingredients[type];
    const updatedCount = prev + 1;
    const updatedIng = {
      ...this.state.ingredients,
    };
    updatedIng[type] = updatedCount;
    const oldTotal = this.state.totalAmount;
    const newTotal = oldTotal + INGREDIENT_PRICES[type];
    this.setState({
      totalAmount: newTotal, ingredients: updatedIng,
    });
    this.updatePurchaseState(updatedIng);
  };
  removeHandler = type => {
    const prev = this.state.ingredients[type];
    if (prev <= 0) {
      return;
    }
    const updatedCount = prev - 1;
    const updatedIng = {
      ...this.state.ingredients,
    };
    updatedIng[type] = updatedCount;
    const oldTotal = this.state.totalAmount;
    const newTotal = oldTotal - INGREDIENT_PRICES[type];
    this.setState({
      totalAmount: newTotal, ingredients: updatedIng,
    })
    this.updatePurchaseState(updatedIng);
  };
  resetHandler = () => {
    this.setState({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
        fish: 0,
      },
      totalAmount: 0,
      purchaseable: false,
      orderButtonClicked: false,
    })
  };
  buttonClickHandler = () => {
    this.setState(prev => {return { orderButtonClicked: !prev.orderButtonClicked }})
  };
  proceedToCheckoutHandler = () => {
    console.log('proceed to checkout: pending');
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.orderButtonClicked} handleClick={this.buttonClickHandler}>
           <OrderSummary
          ingredients={this.state.ingredients}
          total={this.state.totalAmount}
          handleCancel={this.buttonClickHandler}
          handleProceedToChechout={this.proceedToCheckoutHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        adder={this.addHandler}
        remover={this.removeHandler}
        disabled={disabledInfo}
        total={this.state.totalAmount}
        purchaseable={this.state.purchaseable}
        handleOrderButtonClick={this.buttonClickHandler}
        handleResetButtonClick={this.resetHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;