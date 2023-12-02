import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DELETE } from './redux/constant';

class CartShoe extends Component {
  render() {
    let { cart } = this.props;
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item =>{
              return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img src={item.image} className='w-25' alt="" /></td>
                <td><strong>{item.soLuong}</strong></td>
                <td><button className='btn'
                            onClick={()=>{
                              this.props.handleDelete(item.id)
                            }}>X</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}


// lay ve
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      let action={
        type:DELETE,
        payload: id,
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);