import React, { PureComponent } from "react";
import Title from "../elements/title.js";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../GraphQL/Category.js";
import "./HomeScreen.css";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router";
import selectedCategory from "../elements/selectedCategory.js";
import { Link } from "react-router-dom";
import formatCurrency from "format-currency";

class HomeScreen extends PureComponent {
  renderOne() {
    const categories = this.props.data.categories;
    const index = categories[0];
    const opts = { format: "%s%v", symbol: "$" };

    return (
      <div className="box">
        <Title />
        <Switch>
          <Route exact path="/">
            <div className="row1">
              {index.products.map((prdz) => {
                return (
                  <div key={prdz.id} className="card">
                    <Link className="itemlink" to={`/product/${prdz.id}`}>
                      {prdz.inStock === true ? (
                        <img
                          className="images"
                          src={
                            prdz.gallery[0] ? prdz.gallery[0] : prdz.gallery[2]
                          }
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
                          <span
                            style={{ color: "#8D8F9A" }}
                            className="outofstock"
                          >
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
          </Route>
          <Route path="/category/:categoryName" component={selectedCategory} />
        </Switch>
      </div>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading1...</div>;
    }

    return <div>{this.renderOne()}</div>;
  }
}

export default withRouter(graphql(CAT)(HomeScreen));
