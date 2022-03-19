import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import PRODID from "../GraphQL/ProductId.js";
import formatCurrency from "format-currency";
import "./ProductScreen.css";
import { withRouter } from "react-router";
import Attribute from "../elements/RadioButtonColor/attribute.js";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainAttribute: "",
      attrName: "",
    };
  }

  changeMainAttribute = (newattr, attrName) => {
    this.setState((state) => {
      //function to change state
      return { mainAttribute: newattr, attrName: attrName };
    });
  };

  render() {
    const { product } = this.props.data;

    if (!product) {
      return <div>Loading2...</div>;
    }
    const attributeList = product.attributes;
    let opts = { format: "%s%v", symbol: "$" };

    return (
      <div className="prow">
        <div className="pdp1">
          <div className="bpdp1">
            <img className="ipdp1" src={product.gallery}></img>
            <img className="ipdp1" src={product.gallery}></img>
            <img className="ipdp1" src={product.gallery}></img>
          </div>
        </div>
        <div className="pdp2">
          <img className="ipdp2" src={product.gallery}></img>
        </div>
        <div className="pdp3">
          <p className="brand">{product.brand}</p>
          <p className="name">{product.name}</p>

          <div className="attributes">
            <div>
              {attributeList.map((attr) => (
                <Attribute
                  data={attr}
                  changeMainAttribute={this.changeMainAttribute}
                />
              ))}
            </div>
          </div>

          <p className="pricename">Price: </p>
          <p className="amount">
            {formatCurrency(`${product.prices[0].amount}`, opts)}
          </p>
          <button
            className="buttonpdp"
            onClick={() =>
              this.props.onClick({
                ...product,
                mainAttr: this.state.mainAttribute,
                attrName: this.state.attrName,
              })
            }
          >
            Add to cart
          </button>
          <p className="description">
            About the product: {product.description}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(
  graphql(PRODID, {
    options: (props) => {
      return {
        variables: { id: props.match.params.id },
      };
    },
  })(Products)
);
