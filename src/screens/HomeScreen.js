import React, {Component} from 'react';
//import {gql} from '@apollo/client';
import Title from '../elements/title.js';
import { render } from '@testing-library/react';
import { graphql } from '@apollo/client/react/hoc';
//import HOMESCR from '../GraphQL/Homescr.js';
import CAT from '../GraphQL/Category.js';
import {Query} from '@apollo/client/react/components';

class HomeScreen extends Component {
    renderProducts() {
        return this.props.data.categories[1].products.map(product =>{
            return (
                <div className="box">
                    <div className="row">
                        <div key={product.id} className="card">
                            <a href={`/product/${product.id}`}>
                                <img className="images" src={product.gallery} alt={product.name}></img>
                                <p>{product.name}</p>
                                <p>{product.prices.amount}</p>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
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

