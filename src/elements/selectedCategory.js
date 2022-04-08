import React, { PureComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../GraphQL/Category.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../index.css";
import formatCurrency from "format-currency";

class selectedCategory extends PureComponent {
  render() {
    const product = this.props.data.categories;
    const opts = { format: "%s%v", symbol: "$" };
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
                {prdz.inStock === true ? (
                  <img
                    className="images"
                    src={prdz.gallery[0] ? prdz.gallery[0] : prdz.gallery[2]}
                    alt={prdz.name}
                  ></img>
                ) : (
                  <div className="outofstock_block">
                    <img
                      className="images"
                      style={{ backgroundColor: "#FFFFFF", opacity: 0.5 }}
                      src={prdz.gallery}
                      alt={prdz.name}
                    ></img>
                    <span style={{ color: "#8D8F9A" }} className="outofstock">
                      OUT OF STOCK
                    </span>
                  </div>
                )}
                <p className="itemname">{prdz.name}</p>
                <p className="itemprice">
                  {formatCurrency(`${prdz.prices[0].amount}`, opts)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(graphql(CAT)(selectedCategory));
