import React, { PureComponent } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "../src/elements/menu.js";
import HomeScreen from "./screens/HomeScreen.js";
import Products from "./screens/ProductScreen.js";
import NotFound from "./screens/NotFound.js";
import Cart from "./features/cart/Cart.js";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cartRange: [],
      total: 0,
    };
  }

  deleteItem = (mainAttr) => {
    const newState = this.state.cartRange.filter(
      (product) => product.mainAttr !== mainAttr
    );
    this.setState((state) => {
      return {
        cartRange: newState,
      };
    });
  };

  increment = (mainAttr) => {
    const newState = this.state.cartRange;
    const index = newState.findIndex(
      (product) => product.mainAttr === mainAttr
    );
    newState[index].amount = newState[index].amount + 1;

    this.setState((state) => {
      return {
        cartRange: newState,
        total: state.total + newState[index].prices[0].amount,
      };
    });
  };

  decrement = (mainAttr) => {
    const newState = this.state.cartRange;
    const index = newState.findIndex(
      (product) => product.mainAttr === mainAttr
    );
    if (newState[index].amount === 1) {
      this.setState((state) => {
        return { total: state.total - newState[index].prices[0].amount };
      });
      this.deleteItem(mainAttr);
      return;
    } else {
      newState[index].amount = newState[index].amount - 1;
    }
    this.setState((state) => {
      return {
        cartRange: newState,
        total: state.total - newState[index].prices[0].amount,
      };
    });
  };

  cartCheckupVolume = (product) => {
    let isProductInCart = false;

    for (let value of this.state.cartRange) {
      if (value.mainAttr === product.mainAttr) {
        isProductInCart = true;
      }
    }
    if (isProductInCart === true) {
      this.increment(product.mainAttr);
    } else {
      this.setState((state) => {
        product = { ...product, amount: 1 };
        return {
          cartRange: state.cartRange.concat(product),
          total: state.total + product.prices[0].amount,
        };
      });
    }
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <BrowserRouter>
            <Menu
              cartRange={this.state.cartRange}
              newState={this.state.newState}
              total={this.state.total}
              increment={this.increment}
              decrement={this.decrement}
              mainAttr={this.state.mainAttr}
            />
            <Switch>
              <Route path="/product/:id" exact>
                <Products
                  cartRange={this.state.cartRange}
                  onClick={this.cartCheckupVolume}
                  mainAttr={this.state.mainAttr}
                />{" "}
              </Route>
              <Route path="/category/:id" component={HomeScreen}></Route>
              <Route path="/cart">
                <Cart
                  cartRange={this.state.cartRange}
                  increment={this.increment}
                  onClick={this.cartCheckupVolume}
                  decrement={this.decrement}
                  deleteItem={this.deleteItem}
                />
              </Route>
              <Route path="/" component={HomeScreen}></Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
