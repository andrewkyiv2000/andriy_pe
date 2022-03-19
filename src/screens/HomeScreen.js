import React, { Component } from "react";
import Title from "../elements/title.js";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../GraphQL/Category.js";
import "./HomeScreen.css";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router";
import selectedCategory from "../elements/selectedCategory.js";
import { Link } from "react-router-dom";
import formatCurrency from "format-currency";

class HomeScreen extends Component {
  renderOne() {
    const categories = this.props.data.categories;
    const index = categories[0];
    console.log(this.props);

    const url = this.props.location.pathname.split("/");
    const resultUrl = url[url.length - 1];
    let opts = { format: "%s%v", symbol: "$" };

    const catClicked = categories.find(productArray);

    function productArray(item) {
      return item.name === selectedCategory.resultUrl;
    }

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
                      <img
                        className="images"
                        src={prdz.gallery}
                        alt={prdz.name}
                      ></img>
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
    const { match, location, history } = this.props;

    if (this.props.data.loading) {
      return <div>Loading1...</div>;
    }

    return <div>{this.renderOne()}</div>;
  }
}

export default withRouter(graphql(CAT)(HomeScreen));
