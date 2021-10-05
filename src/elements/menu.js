import React, { Component } from "react";
import logo from "../images/logo.png";
import vector from "../images/vector.png";
import cart from "../images/cart.png";
//import { render } from 'react-dom';
import CAT from "../GraphQL/Category.js";
import { graphql } from "@apollo/client/react/hoc";
import CartDropdown from "./cartdropdown.js";

class Menu extends Component {
  renderMenu() {
    const MenuItems = this.props.data;

    return (
      <div className="menu">
        <div className="items1">
          <div className="categories">
            <div className="ttext">
              <a
                className="tlink"
                href={`/category/${MenuItems.categories[0].name}`}
              >
                {MenuItems.categories[0].name}
              </a>
            </div>
            <div className="ttext">
              <a
                className="tlink"
                href={`/category/${MenuItems.categories[1].name}`}
              >
                {MenuItems.categories[1].name}
              </a>
            </div>
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
            <CartDropdown />
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
