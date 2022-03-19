import React, { Component } from "react";
import logo from "../images/logoback.svg";
import cart1 from "../images/cart1.svg";
import cart2 from "../images/cart2.svg";
import cart3 from "../images/cart3.svg";
import CAT from "../GraphQL/Category.js";
import { graphql } from "@apollo/client/react/hoc";
import { NavLink, Link } from "react-router-dom";
import CartDropdown from "./Dropdown/cartdropdown.js";
import DropdownCurrency from "./Dropdowncurrency/dropdowncurrency.js";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: "category",
      dropdownon: false,
      dropdowncurrency: false,
    };
  }

  renderMenu() {
    const MenuItems = this.props.data;
    const dropdownon = this.state.dropdownon;
    const dropdowncurrency = this.state.dropdowncurrency;
    const lineon = this.state.lineon;
    const cartRange = this.props.cartRange;
    let initialValue = 0;
    let totalAmount = cartRange
      .map((item) => item.amount)
      .reduce((a, b) => a + b, initialValue);

    return (
      <div className="menu">
        <div className="items1">
          <div className="categories">
            {MenuItems.categories.map((category) => {
              return (
                <div className="ttext">
                  <NavLink
                    className={(isActive) =>
                      "categorylink" + (isActive ? " selected" : "")
                    }
                    to={`/category/${category.name}`}
                  >
                    {category.name}
                  </NavLink>
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
              <div className="dropdowncurrency">
                <a>
                  <span
                    className="currency_icon"
                    onClick={() =>
                      this.setState(({ dropdowncurrency }) => ({
                        dropdowncurrency: !dropdowncurrency,
                      }))
                    }
                  >
                    $
                  </span>
                </a>
                <div>{dropdowncurrency && <DropdownCurrency />}</div>
              </div>
              <span
                className={
                  "currencyicon" +
                  (this.state.dropdowncurrency === true ? " active" : "")
                }
              ></span>
            </div>
            <div className="shopping_item">
              <a>
                <span
                  className="cart_icon"
                  onClick={() =>
                    this.setState(({ dropdownon }) => ({
                      dropdownon: !dropdownon,
                    }))
                  }
                >
                  <div>
                    <img src={cart1}></img>
                  </div>

                  <div className="cartwheels">
                    <img className="cart2" src={cart2}></img>
                    <img className="cart2" src={cart3}></img>
                  </div>
                </span>
              </a>
              <span className="shopping_counter">{totalAmount}</span>
            </div>
            {dropdownon && (
              <div
                className="layer"
                onClick={() =>
                  this.setState(({ dropdownon }) => ({
                    dropdownon: !dropdownon,
                  }))
                }
              ></div>
            )}
            <div>
              {dropdownon && (
                <CartDropdown
                  cartRange={cartRange}
                  total={this.props.total}
                  increment={this.props.increment}
                  decrement={this.props.decrement}
                />
              )}
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
