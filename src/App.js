import React, { Component } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import Menu from "../src/elements/Menu.js";
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
import store from './store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter.js';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <BrowserRouter>
            <Menu />
           
            <Switch>
              <Route path="/product/:id" exact component={Products}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/" component={HomeScreen}></Route>
              <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </ApolloProviderHooks>
      </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
