import { operationName } from "@apollo/client";
import React, { Component } from "react";
import "./RadioButtonColor.css";

class RadioButtonColor extends Component {
  render() {
    return (
      <fieldset className="radioButton">
        <legend className="radioTitle">{this.props.title}</legend>
        {this.props.options.map((option) => (
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              key={option.value}
              value={option.value}
            />
            <div className="shadow" style={{
              width: "63px",
              height: "45px",
              border: "1px solid rgb(29, 31, 34)",
            backgroundColor: option.value,
          }}/>
          </label>
        ))}
      </fieldset>
    );
  }
}

export default RadioButtonColor;
