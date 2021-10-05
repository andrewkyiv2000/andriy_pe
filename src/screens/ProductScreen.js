import { render } from "@testing-library/react";
import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import PRODID from "../GraphQL/ProductId.js";
import NotFound from "./NotFound.js";
//import Swatch from '../elements/swatch.js';
import formatCurrency from "format-currency";
import RadioButtonColor from "../elements/RadioButtonColor/index.js";
import Capacity from "../elements/attribute2/index.js";
import "./ProductScreen.css";

class Products extends Component {
  render() {
    const { product } = this.props.data;
    console.log(this.props);
    let opts = { format: "%s%v", symbol: "$" };
    if (!product) {
      return <div>Loading...</div>;
    }

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
          <p className="availability">Availability:</p>
          <p className="availabilityAttr">
            {product.inStock ? "Available" : "Not in stock"}
          </p>
          <RadioButtonColor
            name="color"
            title={product.attributes[0].name}
            options={product.attributes[0].items.map((item) => {
              return {
                label: item.displayValue,
                value: item.value,
              };
            })}
          />
          <Capacity
            title={product.attributes[1].id}
            options={product.attributes[1].items.map((item) => {
              return {
                id: item.id,
                displayValue: item.displayValue,
                value: item.value,
              };
            })}
          />

          <p className="pricename">Price: </p>
          <p className="amount">
            {formatCurrency(`${product.prices[0].amount}`, opts)}
          </p>
          <button className="buttonpdp">Add to cart</button>
          <p className="description">
            About the product: {product.description}
          </p>
        </div>
      </div>
    );
  }
}

export default graphql(PRODID, {
  options: (props) => {
    return {
      variables: { id: props.match.params.id },
    };
  },
})(Products);
