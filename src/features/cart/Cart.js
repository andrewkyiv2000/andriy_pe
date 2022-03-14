import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../../GraphQL/Category";
import { removeItems } from "./cartSlice";
//import RadioButtonColor from "../../elements/RadioButtonColor/index.js";
import formatCurrency from "format-currency";
import "./Cart.css";

class Cart extends Component {


  ClickHandlerPlus = () => {
    // parent method passed to child is now available as props
    // you can call it now & even pass arguments if you like
    this.props.increment();
  };

  ClickHandlerMinus = () => {
    this.props.decrement();
  };


  render() {
    const cartCounter = this.props.cartcounter;
    const cartRange = this.props.cartrange;

    let opts = { format: "%s%v", symbol: "$" };
    const product = this.props.data;

    //const attr1 = this.props.items[0].content.attributes[0].items;
    return (
      <div className="page">
        <div className="cart">CART </div>
        <div className="list">
          {this.props.cartRange.map((item) => (
            <div key={item.id}>
              <div className="row">
                <div className="itemleft">
                  <p className="brand">{item.brand}</p>
                  <p className="name">{item.name}</p>
                  <p className="amount">
                    {formatCurrency(`${item.prices[0].amount}`, opts)}
                  </p>
                  <p>
                    <label className="radioLabel">
                      <div
                        style={{
                          width: "63px",
                          height: "45px",
                          border: "1px solid rgb(29, 31, 34)",
                          backgroundColor: item.value,
                        }}
                      />
                    </label>
                  </p>
                  {/*<p>{item.attributes[1].items.displayValue}</p>*/}
                </div>
                <div className="itemright">
                  <div></div>
                  <div className="rightrow">
                    <div className="counter">
                      <button className="counterbutt" onClick={this.ClickHandlerPlus}>+</button>
                      <span className="cart_counter">{cartCounter}</span>
                      <button className="counterbutt" onClick={this.ClickHandlerMinus}>-</button>
                    </div>
                    <img className="cartimage" src={item.gallery} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    );
  }
}
//onClick={this.ClickHandlerPlus()}

// onClick={this.decrement()}

export default Cart;
