import "../Dropdowncurrency/dropdowncurrency.css";
import React, { PureComponent } from "react";

export default class DropdownCurrency extends PureComponent {
  render() {
    return (
      <div className="currencybox">
        <div>
          <span className="currencytext">$ USD</span>
        </div>
        <div>
          <span className="currencytext">€ EUR</span>
        </div>
        <div>
          <span className="currencytext">¥ JPY</span>
        </div>
      </div>
    );
  }
}
