import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../GraphQL/Category.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../index.css";
import formatCurrency from "format-currency";

class selectedCategory extends Component {
  render() {
    const product = this.props.data.categories;
    const pathname = this.props.location.pathname;
    let opts = { format: "%s%v", symbol: "$" };

    const url = this.props.location.pathname.split("/");
    const resultUrl = url[url.length - 1];

    const catClicked = product.find(productArray);

    function productArray(item) {
      return item.name === resultUrl;
    }

    return (
      <div className="row1">
        {catClicked.products.map((prdz) => {
          return (
            <div key={prdz.id} className="card">
              <Link className="itemlink" to={`/product/${prdz.id}`}>
                <img
                  className="images"
                  src={prdz.gallery[0]}
                  alt={prdz.name}
                ></img>
                <p className="itemname">{prdz.name}</p>
                <p className="itemprice">
                  {formatCurrency(`${prdz.prices[0].amount}`, opts)}
                </p>

                {/*<div>{prdz.instock ? <img outofstock src="./image"></img> : ''}</div>*/}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(graphql(CAT)(selectedCategory));
