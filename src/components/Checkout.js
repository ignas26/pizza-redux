import React from 'react';
import {connect} from 'react-redux';

class Checkout extends React.Component{
  render(){

    const order = this.props.orders.map((order, i) => {
      return (
          <li key={i}>{order.title} {order.price}€
            <button className="delete" onClick={()=>{this.props.removeItem(order)}}>ištrinti</button> </li>
      )
    });

    const orders = <button className="deleteAll" onClick={() => {this.props.removeAllItems(this.props.orders)}}>išvalyti viską</button>;

    return (
        <div>
          <h1>Checkout</h1>
          <ul>
            {order}
            {orders}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    pizza: state.pizza
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllItems(order) {
      dispatch({type:'REMOVE_ALL', payload:order})
    },
    removeItem(order) {
      dispatch({type:'REMOVE_ITEM', payload:order})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)