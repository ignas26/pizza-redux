import React from 'react';
import {connect} from 'react-redux';

class Drink extends React.Component {
  render() {
    const drinks = this.props.drinks.map((drink, i) => {
      return (
          <li key={i}>
            {drink.title}
            {drink.price}€
            <button onClick={()=>this.props.addDrink(drink)}>
              Į krepšelį
            </button>
          </li>
      )
    });
    return (
        <div>
          <h1>Drink</h1>
          <ul>
            {drinks}
          </ul>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addDrink(drink){
      dispatch({type:'ADD_DRINK',payload:drink})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Drink)