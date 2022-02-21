import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../../GraphQL/Category";
import { removeItems } from "./cartSlice";
//import RadioButtonColor from "../../elements/RadioButtonColor/index.js";
import formatCurrency from "format-currency";
import "./Cart.css";

class Cart extends Component {
  render() {
    let opts = { format: "%s%v", symbol: "$" };
    console.log(this.props);
    //const attr1 = this.props.items[0].content.attributes[0].items;
    return (
      <div className="page">
        <div className="cart">CART</div>
        <div className="list">
          {this.props.items.map((item) => (
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
                  <div>
              
                  </div>
                  <p>
                    <img className="cartimage" src={item.gallery} />
                  </p>
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
//получаем состояние, считываем
const mapStateRedux = (stateRedux) => ({
  items: stateRedux.cart.value,
});

//определяем экшены

const mapActions = { removeItems };

export default connect(mapStateRedux, mapActions)(Cart);
