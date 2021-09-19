import React, {Component} from "react";
//import logo from './logo.svg';
import './App.css';
import Surface from './elements/surface.js';
//import Title from './elements/title.js';
//import Main from './elements/main.js';
//import Footer from './elements/footer.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

class App extends Component{
  render() {
    return (
    <BrowserRouter>
    <Surface/>,
        <div>
          <Switch>
            <Route path="/product/:id" component={ProductScreen}></Route>  
            <Route path="/" component={HomeScreen}></Route>   
          </Switch>     
        </div>
    </BrowserRouter>
    );
  }
}


export default App;
