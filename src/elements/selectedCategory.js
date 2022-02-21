import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../GraphQL/Category.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class selectedCategory extends Component {
  render() {
    const product = this.props.data.categories
    const pathname = this.props.location.pathname;
  

    const url = this.props.location.pathname.split("/");
    const resultUrl = url[url.length -1]
    console.log(resultUrl);
    
    const catClicked = product.find(productArray);

    function productArray(item) {
      return item.name === resultUrl;
    }

    return (
    <div className="row1">
      {catClicked.products.map((prdz) => {
        return (
          <div key={prdz.id} className="card">
            <Link to={`/product/${prdz.id}`}>
            <img className="images" src={prdz.gallery} alt={prdz.name}></img>
              <p>{prdz.name}</p>
              <p>{prdz.prices.amount}</p>
            </Link>
          </div>
        );
      })}
    </div>);
  }
}



export default withRouter(graphql(CAT)(selectedCategory));
