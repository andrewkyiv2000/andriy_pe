import React, {Component} from 'react';
import Title from '../elements/title.js';
import { render } from '@testing-library/react';
import { graphql } from '@apollo/client/react/hoc';
import CAT from '../GraphQL/Category.js';
import {Query} from '@apollo/client/react/components';
import './HomeScreen.css';

class HomeScreen extends Component {
    
    renderProducts() {
        const product1 = this.props.data.categories[1].products[0]
        const product2 = this.props.data.categories[1].products[1]
        const product3 = this.props.data.categories[1].products[2]
        const product4 = this.props.data.categories[1].products[3]
        const product5 = this.props.data.categories[1].products[4]
        const product6 = this.props.data.categories[1].products[5]

        return (
            <div className="box">
                <Title/>
                <div className="row1">
                    <div key={product1.id} className="card">
                        <a href={`/product/${product1.id}`}>
                            <img className="images" src={product1.gallery} alt={product1.name}></img>
                            <p>{product1.name}</p>
                            <p>{product1.prices.amount}</p>
                        </a>
                    </div>
                    <div key={product2.id} className="card">
                        <a href={`/product/${product2.id}`}>
                            <img className="images" src={product2.gallery} alt={product2.name}></img>
                            <p>{product2.name}</p>
                            <p>{product2.prices.amount}</p>
                        </a>
                    </div>
                    <div key={product3.id} className="card">
                        <a href={`/product/${product3.id}`}>
                            <img className="images" src={product3.gallery} alt={product3.name}></img>
                            <p>{product3.name}</p>
                            <p>{product3.prices.amount}</p>
                        </a>
                    </div>
                </div>
                <div className="row2">
                    <div key={product4.id} className="card">
                        <a href={`/product/${product4.id}`}>
                            <img className="images" src={product4.gallery} alt={product4.name}></img>
                            <p>{product4.name}</p>
                            <p>{product4.prices.amount}</p>
                        </a>
                    </div>
                    <div key={product5.id} className="card">
                        <a href={`/product/${product5.id}`}>
                            <img className="images" src={product5.gallery} alt={product5.name}></img>
                            <p>{product5.name}</p>
                            <p>{product5.prices.amount}</p>
                        </a>
                    </div>
                    <div key={product6.id} className="card">
                        <a href={`/product/${product6.id}`}>
                            <img className="images" src={product6.gallery} alt={product6.name}></img>
                            <p>{product6.name}</p>
                            <p>{product6.prices.amount}</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }      

   

render() {
if (this.props.data.loading) {return <div>Londing...</div>;}
console.log(this.props)

return(
    <div>
       {this.renderProducts()}
    </div>
);
}
}

export default graphql(CAT)(HomeScreen);
