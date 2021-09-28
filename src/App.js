import React, {Component} from "react";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider as ApolloProviderHooks} from "@apollo/client";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Surface from './elements/surface.js';
//import Title from './elements/title.js';
//import Main from './elements/main.js';
//import Footer from './elements/footer.js';
import HomeScreen from './screens/HomeScreen.js';
import Products from './screens/ProductScreen.js';
import NotFound from './screens/NotFound.js';
//import PRODID from "./GraphQL/ProductId";
//import {OnError} from '@apollo/client/link/error'


const client = new ApolloClient ({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

class App extends Component{
  render() {
    return (
    <ApolloProvider client={client}> 
    <ApolloProviderHooks client={client}>
    <BrowserRouter>
    <Surface/>
   
    <Switch>
      
          <Route path={"/product/:id"} exact component={Products}></Route>
          <Route path="/" component={HomeScreen}></Route>   
          <Route component={NotFound}/>
    </Switch>     
    </BrowserRouter>
    </ApolloProviderHooks>
    </ApolloProvider> 
    );
  }
}

export default App
