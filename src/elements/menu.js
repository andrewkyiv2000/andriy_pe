import React, {Component} from 'react';
import logo from '../images/logo.png';
import vector from '../images/vector.png';
import cart from '../images/cart.png';
//import { render } from 'react-dom';
import CAT from '../GraphQL/Category.js';
import {graphql} from '@apollo/client/react/hoc';


class Menu extends Component {

    renderMenu() {

    const MenuItems = this.props.data

        return (
            <div className="menu">
                <div className="items1">
                    <div className="categories">
                        <div className="ttext">{MenuItems.categories[0].name}</div>
                        <div className="ttext">{MenuItems.categories[1].name}</div>
                    </div>
                </div>
                <div className="items1">
                    <div className="a-logo">
                        <img src={logo}></img>
                    </div>
                </div>
                <div className="items1">
                    <div className="actions">
                        <div className="currency">$</div>
                        <img src={vector}></img>
                        <img src={cart} className="cart"></img>
                    </div>
                </div>
            </div>
        );
    }


render() {

if (this.props.data.loading) {return <div>Londing...</div>;}
console.log(this.props)

return(
    <div>
       {this.renderMenu()}
    </div>
);
}
}


export default graphql(CAT)(Menu);


