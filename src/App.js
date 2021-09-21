import React, {Component} from "react";
//import logo from './logo.svg';
import './App.css';
import Surface from './elements/surface.js';
//import Title from './elements/title.js';
//import Main from './elements/main.js';
//import Footer from './elements/footer.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
//import {OnError} from '@apollo/client/link/error'


const client = new ApolloClient ({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

class App extends Component{
  render() {
    return <ApolloProvider client={client}> 
    <BrowserRouter>
    <Surface/>
    <Switch>
          <Route path="/product/:id" exact component={ProductScreen}></Route>  
          <Route path="/" component={HomeScreen}></Route>   
    </Switch>     
    </BrowserRouter>
    </ApolloProvider>
  }
}

export default App
