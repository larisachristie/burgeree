import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <h1>BURGEREE!</h1>
        <BurgerBuilder/>
      </Layout>
    )
  }
}

export default App;