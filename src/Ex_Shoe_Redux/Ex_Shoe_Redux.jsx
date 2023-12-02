import React, { Component } from 'react';
import CartShoe from './CartShoe';
import ListShoe from './ListShoe';

export default class Ex_Shoe_Redux extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <CartShoe />
          <ListShoe />
        </div>
      </div>
    );
  }
}


