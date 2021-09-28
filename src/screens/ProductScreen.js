import { render } from '@testing-library/react';
import React, {Component } from 'react';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc'
import PRODID from '../GraphQL/ProductId.js';
import NotFound from './NotFound.js';
//import Swatch from '../elements/swatch.js';


class Products extends Component {
    render(){
        const {product} = this.props.data;
        console.log(this.props);
        if (!product){return <div>Loading...</div>}
       
        return(
            <div className="prow">
            <div className="pdp1">
                <div className="bpdp1">
                    <img className="ipdp1" src={product.gallery}></img>
                    <img className="ipdp1" src={product.gallery}></img>
                    <img className="ipdp1" src={product.gallery}></img>    
                </div>       
            </div>
            <div className="pdp2">
                <img className="ipdp2" src={product.gallery}></img>

            </div>
            <div className="pdp3">
                <p className="brand">{product.brand}</p>
                <p className="name">{product.name}</p>    
                <p>{product.inStock}</p>    
                <div className="attr1">{product.attributes[0].id}:
                    <div className="attr1box">
                      
                        <div>{product.attributes[0].items[0].displayValue}</div>
                        <div>{product.attributes[0].items[1].displayValue}</div>
                        <div>{product.attributes[0].items[2].displayValue}</div>
                        <div>{product.attributes[0].items[3].displayValue}</div>
                        <div>{product.attributes[0].items[4].displayValue}</div>
                        </div> 
                </div>        
                <p className="pricename">Price: </p>
                <p className="amount">{product.prices[0].amount} $</p>
                <button className="buttonpdp">Add to cart</button>
                <p className="description">About the product: {product.description}</p>

                
            </div>
        </div>
        )
    }
}

export default graphql(PRODID, {
    options: (props) => {
        return {
            variables: {id:props.match.params.id}
        }
    }
})(Products);
