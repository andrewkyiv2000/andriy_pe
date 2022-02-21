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

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: "category",
    };
  }
  renderMenu() {
    const MenuItems = this.props.data;
   // console.log(this.state.click);

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
            <div className="currency">
              <select id="currency">
                <option>$ USD</option>
                <option>€ Euro</option>
                <option>¥ Yen</option>
              </select>
            </div>
            <img src={vector}></img>
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


export default (graphql(CAT)(Menu));

//<img src={cart} className="cart"></img>
//graphql(CAT)(Menu)
