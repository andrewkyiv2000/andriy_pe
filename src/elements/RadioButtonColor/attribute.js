//the whole file contans all attributes on product item

import React, { Component } from "react";
import "./RadioButtonColor.css";

export default class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttr: "",
    };
  }

  render() {
    return (
      <div >
        <div className="attrname"> {this.props.data.name}</div>
        <div >
          <div className="radioinputWrapper">
          {this.props.data.items.map(
            (
              item //map is each square attribute element
            ) => (
              <input
                onClick={() => {
                  if (this.state.selectedAttr === item.value) {
                    //момент отжатия
                    if (
                      this.props.data.name === "Capacity" ||
                      this.props.data.name === "Size"
                    ) {
                      //we only choose here mentioned attributes,and not include color and other
                      this.props.changeMainAttribute("", "");
                    }
                    this.setState((state) => {
                      return { selectedAttr: "" };
                    });
                  } else {
                    if (
                      this.props.data.name === "Capacity" ||
                      this.props.data.name === "Size"
                    ) {
                      //we only choose here mentioned attributes,and not include color and other
                      this.props.changeMainAttribute(
                        item.value,
                        this.props.data.name
                      );
                    }

                    this.setState((state) => {
                      return { selectedAttr: item.value }; //момент нажатия
                    });
                  }
                }}
                className={
                  "radioinput" +
                  (this.state.selectedAttr === item.value ? " active" : "") //if selected, we change color
                }
                style={{
                  backgroundColor:
                    this.props.data.name === "Color" ? item.value : "",
                  fontSize: this.props.data.name === "Color" ? "0px" : "16px", //if we work with color, no text. If text attr then it appears
                }}
                type="button"
                key={item.value}
                value={item.value}
                id={item.value}
                name={item.name}
              />
            )
          )}
          </div>
        </div>
      </div>
    );
  }
}
