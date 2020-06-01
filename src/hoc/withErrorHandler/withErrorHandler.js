import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        error: null,
      };
    }
    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      })
      this.responseInterceptor = axios.interceptors.response.use(null, error => {
        console.log('withErrorHandler error: ', error.message);
        this.setState({ error: error });
      });
    };
    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    };
    closeModalHandler = () => {
      console.log('click');
      this.setState({ error: false });
    };
    render() {
      return (
        <Aux>
          <Modal
          show={this.state.error}
          handleClick={this.closeModalHandler}>{this.state.error && this.state.error.message}</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
        );
    }
  }
};

export default withErrorHandler;