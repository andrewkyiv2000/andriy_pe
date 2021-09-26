import React, {Component} from 'react';
import logo from '../images/logo.png';
import vector from '../images/vector.png';
import cart from '../images/cart.png';


class Surface extends Component {
    render() {
        return (
            <div className="surface">
                <div className="items1">
                    <div className="categories">
                        <div className="ttext">WOMEN</div>
                        <div className="ttext">MEN</div>
                        <div className="ttext">KIDS</div>
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
}
export default Surface


