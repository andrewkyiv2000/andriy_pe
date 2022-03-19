import "../Dropdowncurrency/dropdowncurrency.css";
import React, { Component } from "react";

export default class DropdownCurrency extends Component {
  render() {
    return (
      <div className="currencybox">
        <a><span className="currencytext">$ USD</span></a>
        <a><span className="currencytext">€ EUR</span></a>
        <a><span className="currencytext">¥ JPY</span></a>
      </div>
    );
  }
}

