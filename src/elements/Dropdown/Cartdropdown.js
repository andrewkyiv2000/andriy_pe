import React, { Component } from "react";
//import cart from "../images/cart.png";
//import CartContext from "../context/CartContext.js";
import "../Dropdown/cartdropdown.css";
import formatCurrency from "format-currency";
import { Link } from "react-router-dom";
import { stripIgnoredCharacters } from "graphql";

export default class CartDropdown extends Component {
  render() {
    let opts = { format: "%s%v", symbol: "$" };
    console.log(this.props);
    const totalstr = this.props.total;

    return (
      <div className="dropdown_main">
        <p className="mybag">My bag:</p>{" "}
        <div className="dropdown_items">
          {this.props.cartRange.map((item) => (
            <div key={item.id}>
              <div className="drrow">
                <div className="dritemleft">
                  <div>
                    <p className="drbrand">{item.name}</p>
                  </div>
                  <div>
                    <p className="dramount">
                      {formatCurrency(`${item.prices[0].amount}`, opts)}
                    </p>
                  </div>
                  <div className="radioLabel">
                    <label>
                      <div
                        className="attrbox"
                        style={{
                          width: "24px",
                          height: "24px",
                          border: "1px solid rgb(29, 31, 34)",
                        }}
                      >
                        {item.mainAttr}
                      </div>
                    </label>
                  </div>
                  {/*<p>{item.attributes[1].items.displayValue}</p>*/}
                </div>
                <div className="dritemright">
                  <div className="rightrow">
                    <div className="drcounter">
                      <div>
                        <button
                          className="drcounterbutt"
                          onClick={() => this.props.increment(item.id)}
                        >
                          +
                        </button>{" "}
                        {/* item.id is where we give content to the abstract function from app.js*/}
                      </div>
                      <div>
                        <p>{item.amount}</p>
                      </div>
                      <div>
                        <button
                          className="drcounterbutt"
                          onClick={() => this.props.decrement(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <img className="drcartimage" src={item.gallery} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottomblock">
          <div className="total">
            <div className="totalname">Total: </div>
            <div className="totalfigure">{totalstr}</div>
          </div>
        </div>
        <div className="drbuttons">
          <button className="drbuttontotal">Total</button>
          <Link to="../cart" className="drbuttoncheckout">
            Chekout
          </Link>
        </div>
      </div>
    );
  }
}

//<h1>Item is {this.props.cartRange.length}</h1>
// {this.props.cartRange[0].brand}
