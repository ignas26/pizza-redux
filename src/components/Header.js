import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
        <header>
          <NavLink exact activeClassName='active' to="/">Home</NavLink>
          <NavLink exact activeClassName='active' to="/pizza">Pizza</NavLink>
          <NavLink exact activeClassName='active' to="/drink">Drink</NavLink>
          <NavLink exact activeClassName='active' to="/cart">Cart</NavLink>
        </header>
    );
  }
}
export default Header