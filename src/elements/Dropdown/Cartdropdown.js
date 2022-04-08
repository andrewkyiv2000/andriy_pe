import React, { Component } from "react";
import "../Dropdown/cartdropdown.css";
import formatCurrency from "format-currency";
import { Link } from "react-router-dom";

export default class CartDropdown extends Component {
  render() {
    const opts = { format: "%s%v", symbol: "$" };
    const totalstr = this.props.total;

    return (
      <div className="dropdown_main">
        <div className="mybag">
          My bag,
          <span className="mybagfigure">{this.props.totalAmount} items</span>
        </div>
        <div className="dropdown_items">
          {this.props.cartRange.map((item) => (
            <div key={item.mainAttr}>
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
                    <div className="labelsrow">
                      <label>
                        <div
                          className="attrbox"
                          style={{
                            width: "24px",
                            height: "24px",
                            border: "1px solid rgb(29, 31, 34)",
                            backgroundColor: "black",
                            color: "white",
                          }}
                        >
                          {item.mainAttr}
                        </div>
                      </label>
                      <label>
                        <div
                          className="attrbox2"
                          style={{
                            width: "24px",
                            height: "24px",
                            border: "1px solid rgb(29, 31, 34)",
                            backgroundColor: "white",
                          }}
                        >
                          {item.attributes[0].items[0].value}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="dritemright">
                  <div className="rightrow">
                    <div className="drcounter">
                      <div>
                        <button
                          className="drcounterbutt"
                          onClick={() => this.props.increment(item.mainAttr)}
                        >
                          +
                        </button>{" "}
                      </div>
                      <div>
                        <p>{item.amount}</p>
                      </div>
                      <div>
                        <button
                          className="drcounterbutt"
                          onClick={() => this.props.decrement(item.mainAttr)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <img
                      className="drcartimage"
                      alt=""
                      src={item.gallery[0] ? item.gallery[0] : item.gallery[2]}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottomblock">
          <div className="total">
            <div className="totalname">Total:</div>
            <div className="totalfigure">
              {totalstr ? totalstr.toString().substring(0, 7) : 0}
            </div>
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
