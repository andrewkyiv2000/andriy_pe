import React, { Component } from "react";
import logo from "../images/logo.png";
import vector from "../images/vector.png";
import cart from "../images/cart.png";
//import { render } from 'react-dom';
import CAT from "../GraphQL/Category.js";
import { graphql } from "@apollo/client/react/hoc";
//import CartDropdown from "./Dropdown/Cartdropdown.js";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import CartDropdown from "./Dropdown/cartdropdown.js";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: "category",
      dropdownon: false,
    };
  }

  renderMenu() {
    const MenuItems = this.props.data;
    const dropdownon = this.state.dropdownon;
    const cartRange = this.props.cartRange
    console.log(cartRange);

    return (
      <div className="menu">
        <div className="items1">
          <div className="categories">
            {MenuItems.categories.map((category) => {
              return (
                <div className="ttext">
                  <Link to={`/category/${category.name}`}>
                    <a className="tlink">{category.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="items1">
          <div className="a-logo">
            <img src={logo}></img>
          </div>
        </div>
        <div className="items1">
          <div className="actions">
            <div className="actions_left">
              <select className="currency" id="currency">
                <option>$ </option>
                <option>€ </option>
                <option>¥ </option>
              </select>
              <span className="currencyicon"></span>
            </div>
            <a>
              <span
                className="cart_icon"
                onClick={() =>
                  this.setState(({ dropdownon }) => ({
                    dropdownon: !dropdownon,
                  }))
                }
              ></span>
            </a>
            <div>
              {dropdownon && <CartDropdown cartRange={cartRange} />}
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <div>Londing...</div>;
    }
    console.log(this.props);

    return <div>{this.renderMenu()}</div>;
  }
}

export default graphql(CAT)(Menu);

//<img src={cart} className="cart"></img>
//graphql(CAT)(Menu)
//{this.props.cartRange.map((e)=>e.name)}
