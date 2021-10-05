import React, {Component} from 'react';
import {graphql} from '@apollo/client/react/hoc';
import CAT from '../GraphQL/Category.js';

class Cart extends Component {




    render() {

        return(
            <div className='cart1'>CART</div>

            <div className='cart2'>
                <img>IMG</img>
            </div>




        )
    }
}

export default graphql(CAT)(Cart);