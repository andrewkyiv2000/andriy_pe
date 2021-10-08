import React, {Component} from 'react';
import {graphql} from '@apollo/client/react/hoc';
import CAT from '../GraphQL/Category.js';

const product = [
    {
        id: 1,
        name:"Apollo",
        brand: "Running short",
        price: 100,
        attr1: "value1",
        attr2: "value2",
        count: 3,
        image: "image",
    },
    {
        id: 2,
        name:"Apollo",
        brand: "Running short",
        price: 100,
        attr1: "value1",
        attr2: "value2",
        count: 3,
        image: "image",

    }
]


class Cart extends Component {




    render() {

        return(
            <div className='pagename'>CART
            <ul className='cartrows'>
                {product.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                    </li>              
                ))}
            </ul>
            </div>
        )
    }
}

export default Cart;