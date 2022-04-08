import React, { PureComponent } from "react";
import "./RadioButtonColor.css";

export default class Attribute extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttr: "",
    };
  }

  render() {
    return (
      <div>
        <div className="attrname"> {this.props.data.name}</div>
        <div>
          <div className="radioinputWrapper">
            {" "}
            {this.props.data.items.map((item) => (
              <input
                onClick={() => {
                  if (this.state.selectedAttr === item.value) {
                    if (
                      this.props.data.name === "Capacity" ||
                      this.props.data.name === "Size"
                    ) {
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
                      this.props.changeMainAttribute(
                        item.value,
                        this.props.data.name
                      );
                    }
                    this.setState((state) => {
                      return { selectedAttr: item.value };
                    });
                  }
                }}
                className={
                  "radioinput" +
                  (this.state.selectedAttr === item.value ? " active" : "")
                }
                style={{
                  backgroundColor:
                    this.props.data.name === "Color" ? item.value : "",
                  fontSize: this.props.data.name === "Color" ? "0px" : "16px",
                }}
                type="button"
                value={item.value}
                key={item.value}
                id={item.value}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
