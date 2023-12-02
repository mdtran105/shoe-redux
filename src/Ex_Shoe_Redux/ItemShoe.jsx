import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD } from './redux/constant';

class ItemShoe extends Component {
  render() {
    return (
      <div className='col-4'>
        <img src={this.props.data.image} className='w-100' alt="shoe img" />
        <h4>{this.props.data.name}</h4>
        <button className='btn btn-primary mt-auto'
          onClick={() => {
            this.props.handleAddToCart(this.props.data);
          }}>Mua</button>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoe) => {
      let action = {
        type: ADD,
        payload: shoe,
      };
      dispatch(action);
    }
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);