import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-instance';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  cheese: 2,
  meat: 3,
  fish: 4,
};

class BurgerBuilder extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: null,
      totalAmount: 0,
      purchaseable: false,
      orderButtonClicked: false,
      loading: false,
      error: false,
    };
  }
  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        console.log('burgerBuilder get error: ', error.message);
        this.setState({ error: true });
    });
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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      totalAmount: this.state.totalAmount,
      customer: {
        name: 'Max',
        address: {
          street: 'sam[ple street',
          zip: '12345',
          country: 'Australia',
        },
        email: 'tste@tsts',
      },
      delivery: 'fastest',
    };
    axios.post('/orders.json', order)
      .then(response => this.setState({ orderButtonClicked: false, loading: false }))
      .catch(error => {
        console.log('burgerBuilder post error: ', error.message);
        this.setState({ orderButtonClicked: false, loading: false })
      });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let burger = this.state.error ? <p>An error has occurred</p> : <Spinner />;
    let orderSummary = null;
    if (this.state.ingredients) {
      burger = ([
        <Burger key="burger" ingredients={this.state.ingredients} />, 
        <BuildControls
        key="buildcontrols"
        adder={this.addHandler}
        remover={this.removeHandler}
        disabled={disabledInfo}
        total={this.state.totalAmount}
        purchaseable={this.state.purchaseable}
        handleOrderButtonClick={this.buttonClickHandler}
        handleResetButtonClick={this.resetHandler} />
      ]);
      orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      total={this.state.totalAmount}
      handleCancel={this.buttonClickHandler}
      handleProceedToCheckout={this.proceedToCheckoutHandler} />
    }
    if (this.state.loading) {
      return orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.orderButtonClicked} handleClick={this.buttonClickHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);