import React, { Component } from "react";
import formatCurrency from "format-currency";
import "./Cart.css";

class Cart extends Component {
  ClickHandlerPlus = (id) => {
    this.props.increment(id);
  };

  ClickHandlerMinus = (id) => {
    this.props.decrement(id);
  };

  render() {
    const cartCounter = this.props.cartcounter;
    const cartRange = this.props.cartrange;
    const opts = { format: "%s%v", symbol: "$" };
    const product = this.props.data;

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
                    <div className="radiolabelrow">
                      <label className="radioLabel">
                        <div
                          className="attrtext"
                          style={{
                            width: "63px",
                            height: "45px",
                            border: "1px solid #1D1F22",
                            backgroundColor: "black",
                            color: "white",
                          }}
                        >
                          {item.mainAttr && item.mainAttr.length > 0
                            ? item.mainAttr
                            : ""}{" "}
                        </div>
                      </label>
                      <label>
                        <div
                          className="attrtext2"
                          style={{
                            width: "63px",
                            height: "45px",
                            border: "1px solid #1D1F22",
                            backgroundColor: "white",
                          }}
                        >
                          {item.attributes[0].items[0].value}
                        </div>
                      </label>
                    </div>
                  </p>
                </div>
                <div className="itemright">
                  <div></div>
                  <div className="rightrow">
                    <div className="counter">
                      <button
                        className="counterbutt"
                        onClick={() => this.ClickHandlerPlus(item.mainAttr)}
                      >
                        +
                      </button>
                      <span className="cart_counter">{item.amount}</span>
                      <button
                        className="counterbutt"
                        onClick={() => this.ClickHandlerMinus(item.mainAttr)}
                      >
                        -
                      </button>
                    </div>
                    <img
                      className="cartimage"
                      src={item.gallery[0] ? item.gallery[0] : item.gallery[2]}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
