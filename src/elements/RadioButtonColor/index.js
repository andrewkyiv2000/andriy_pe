import { operationName } from "@apollo/client";
import React, { Component } from "react";
import "./RadioButtonColor.css";
//import { addItems } from "../../features/cart/cartSlice.js";

class RadioButtonColor extends Component {
  render() {
    
    return (
      <div className="radioInputWrapper">
        {this.props.options.map((option) => (
          <input
            className="radioInput"
            type="button"
            key={option.value}
            value={option.value}
            id={option.value}
            name={this.props.name}
          />
        ))}
      </div>
    );
  }
}

export default RadioButtonColor;
