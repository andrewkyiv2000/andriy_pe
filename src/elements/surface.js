import React, {Component} from 'react';
import logo from '../images/logo.png';
import vector from '../images/vector.png';
import cart from '../images/cart.png';


class Surface extends Component {
    render() {
        return (
            <div class="surface">
                <div class="items1">
                    <div class="categories">
                        <div class="ttext">WOMEN</div>
                        <div class="ttext">MEN</div>
                        <div class="ttext">KIDS</div>
                    </div>
                </div>
                <div class="items1">
                    <div class="a-logo">
                        <img src={logo}></img>
                    </div>
                </div>
                <div class="items1">
                    <div class="actions">
                        <div class="currency">$</div>
                        <img src={vector}></img>
                        <img src={cart} class="cart"></img>
                    </div>
                </div>
            </div>
        );
    }
}
export default Surface


