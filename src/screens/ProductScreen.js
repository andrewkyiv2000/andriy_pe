import React, { PureComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";
import PRODID from "../GraphQL/ProductId.js";
import formatCurrency from "format-currency";
import "./ProductScreen.css";
import { withRouter } from "react-router";
import Attribute from "../elements/RadioButtonColor/attribute.js";
import DOMPurify from "dompurify";

class Products extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainAttribute: "",
      attrName: "",
    };
  }

  changeMainAttribute = (newattr, attrName) => {
    this.setState((state) => {
      return { mainAttribute: newattr, attrName: attrName };
    });
  };

  render() {
    const { product } = this.props.data;

    if (!product) {
      return <div>Loading2...</div>;
    }
    const attributeList = product.attributes;
    const opts = { format: "%s%v", symbol: "$" };
    const description = product.description;
    const clean = DOMPurify.sanitize(description);

    return (
      <div className="prow">
        <div className="pdp1">
          <div className="bpdp1">
            <img
              alt=""
              className="ipdp1"
              src={product.gallery[0] ? product.gallery[0] : product.gallery[2]}
            ></img>
            <img
              alt=""
              className="ipdp1"
              src={product.gallery[0] ? product.gallery[0] : product.gallery[2]}
            ></img>
            <img
              alt=""
              className="ipdp1"
              src={product.gallery[0] ? product.gallery[0] : product.gallery[2]}
            ></img>
          </div>
        </div>
        <div className="pdp2">
          {product.inStock === true ? (
            <img
              alt=""
              className="ipdp2"
              src={product.gallery[0] ? product.gallery[0] : product.gallery[2]}
            ></img>
          ) : (
            <div className="outofstock_block">
              <img
                alt=""
                className="ipdp2"
                style={{ backgroundColor: "#FFFFFF", opacity: 0.5 }}
                src={product.gallery}
              ></img>
              <span style={{ color: "#8D8F9A" }} className="outofstock">
                OUT OF STOCK
              </span>
            </div>
          )}
        </div>
        <div className="pdp3">
          <p className="brand">{product.brand}</p>
          <p className="name">{product.name}</p>

          <div className="attributes">
            <div>
              {attributeList.map((attr) => (
                <Attribute
                  key={attr.id}
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
          <span id="description" className="description">
            {
              <div
                dangerouslySetInnerHTML={{
                  __html: clean,
                }}
              />
            }
          </span>
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
