import React, { Component } from "react";
//import cart from "../images/cart.png";
//import CartContext from "../context/CartContext.js";
import "../Dropdown/cartdropdown.css";
import formatCurrency from "format-currency";

export default class CartDropdown extends Component {
  render() {
    let opts = { format: "%s%v", symbol: "$" };
    console.log(this.props);
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
                  <div>
                    <label className="radioLabel">
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          border: "1px solid rgb(29, 31, 34)",
                          backgroundColor: item.value,
                        }}
                      />
                    </label>
                  </div>
                  {/*<p>{item.attributes[1].items.displayValue}</p>*/}
                </div>
                <div className="dritemright">
                  <div className="rightrow">
                    <div className="drcounter">
                      <div>
                        <button className="drcounterbutt">+</button>
                      </div>
                      <div>
                        <p>1</p>
                      </div>
                      <div>
                        <button className="drcounterbutt">-</button>
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
          <div className="total">Total:</div>
          <div className="drbuttons">
            <button className="drbuttontotal">Total</button>
            <button className="drbuttoncheckout">Chekout</button>
          </div>
        </div>
      </div>
    );
  }
}

//<h1>Item is {this.props.cartRange.length}</h1>
// {this.props.cartRange[0].brand}
