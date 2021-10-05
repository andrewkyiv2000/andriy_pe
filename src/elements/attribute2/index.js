import { getByDisplayValue } from "@testing-library/dom";
import React, { Component } from "react";
import "./Attribute2.css";

class Capacity extends Component {
  render() {
    return (
      <form className="attr2">
        <label for="attr2" className="label">
          {this.props.title}:
          <select className="select" name="capacity" id="attr2">
            {this.props.options.map((option) => (
              <option className="option">{option.value}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default Capacity;
