import { render } from '@testing-library/react';
import React, {Component, useEffect, useState, Fragment} from 'react';
import { gql, useQuery, useLazyQuery} from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc'
import PRODID from '../GraphQL/ProductId.js';
import NotFound from './NotFound.js';



class Products extends Component {
    render(){
        const {product} = this.props.data;
        console.log(this.props);
        if (!product){return <div>Loading...</div>}
       
        return(
            <div className="row">
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
