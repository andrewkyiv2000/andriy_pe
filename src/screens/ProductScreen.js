import React, {Component} from 'react';
import data from '../Data.js';

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
        if (!product) {
            return <div> Product not found</div>;
    }
    return (
        <div className="row">
            <div className="pdp1">
                <div className="bpdp1">
                    <img className="ipdp1" src={product.image}></img>
                    <img className="ipdp1" src={product.image}></img>
                    <img className="ipdp1" src={product.image}></img>    
                </div>       
            </div>
            <div className="pdp2">
                <img className="ipdp2" src={product.image}></img>

            </div>
            <div className="pdp3">

            </div>
        </div>
    );
}

