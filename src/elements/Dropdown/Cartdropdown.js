import React, { Component, useContext } from "react";
import cart from "../images/cart.png";
import CartContext from "../context/CartContext.js";

export default class CartDropdown extends Component {
  render() {
    return  <div className="pagename">
          <h1>Item is {this.props.items.length}</h1>
    </div>;
  }
}
