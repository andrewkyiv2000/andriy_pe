import React, { Component } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import Menu from "../src/elements/menu.js";
//import Dropdown from './elements/dropdown.js';
//import Title from './elements/title.js';
//import Main from './elements/main.js';
//import Footer from './elements/footer.js';
import HomeScreen from "./screens/HomeScreen.js";
import Products from "./screens/ProductScreen.js";
import NotFound from "./screens/NotFound.js";
import Cart from "./features/cart/Cart.js";
//import PRODID from "./GraphQL/ProductId";
//import {OnError} from '@apollo/client/link/error'
//import CartDropdown from "./elements/Dropdown/cartdropdown.js";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartRange: [],
      cartcounter: 0,
      total: 0,
    };
  }

  

  addtoCart = (product) => {
    this.setState((state) => {
      return { cartRange: [...state.cartRange] };
    });
  };

  increment = () => {
    this.setState({ cartcounter: this.state.cartcounter + 1 });
  };
  
  decrement = () => {
    this.setState({cartcounter: this.state.cartcounter - 1});
  };

  cartCheckupVolume = (продукт) => {
    let isProductInCart = false;

    for (let value of this.state.cartRange) {
      if (value.id === продукт.id) {
        isProductInCart = true;
      }
    }

    if (isProductInCart === true) {
      this.increment();    
    } else {
      this.setState((state) => {
        return { cartRange: state.cartRange.concat(продукт) };
      });
    }
  };
  

  render() {
    console.log(this.props)
    return (
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <BrowserRouter>
            <Menu cartRange={this.state.cartRange} />
            <Switch>
              <Route path="/product/:id" exact>
                <Products onClick={this.cartCheckupVolume} cartcounter={this.state.cartcounter}/>{" "}
                {/*we pass to onClick, evertyhing we pass to onClick will be caught*/}
              </Route>
              <Route path="/category/:id" component={HomeScreen}></Route>
              <Route path="/cart">
                <Cart cartRange={this.state.cartRange} cartcounter={this.state.cartcounter} increment={this.increment} onClick={this.cartCheckupVolume} decrement={this.decrement}/>
                {/*we pass counter and can be any word here */}
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


/* decrement = () => {
    this.setState({ cartcounter: this.state.cartcounter - 1 });
  };*/