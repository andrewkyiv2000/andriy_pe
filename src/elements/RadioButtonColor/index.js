import React, { Component } from "react";
import "./RadioButtonColor.css";

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
