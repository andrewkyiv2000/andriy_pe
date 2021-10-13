import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import CAT from "../../GraphQL/Category";
import { removeItems } from "./cartSlice";



class Cart extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="pagename">
          <h1>Item is {this.props.items.length}</h1>
        
        <ul className="cartrows">
          {this.props.items.map((item) => (
            <li key={item.id}>{item.content.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
//получаем состояние, считываем
const mapStateRedux = (stateRedux) => ({
    items:stateRedux.cart.value
})

//определяем экшены

const mapActions = {removeItems};


export default connect(mapStateRedux, mapActions)(Cart);
