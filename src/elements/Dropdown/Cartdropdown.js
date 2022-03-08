import React, { Component } from "react";
//import cart from "../images/cart.png";
//import CartContext from "../context/CartContext.js";
import "../Dropdown/cartdropdown.css";

export default class CartDropdown extends Component {
  render() {
    //console.log(this.props.cartRange[0].brand);
    return (
      <div className="dropdown_main">
       Cart range here: {this.props.cartRange[0].brand}
        <div>{this.props.cartRange.map((item) => {
          <div>
            <p>{item.brand}</p>
          </div>;
          <div>{item.category}</div>;
        })}</div>
      </div>
    );
  }
}

//<h1>Item is {this.props.cartRange.length}</h1>
// 
