import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemShoe from './ItemShoe';

class ListShoe extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className='row col-6'>
        {list.map(item => {
          return <ItemShoe key={item.id}
            data={item}
          />;
        })}

      </div>
    );
  }
}

// lay ve
let mapStateToProps = (state) => {
  return {
    list: state.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
