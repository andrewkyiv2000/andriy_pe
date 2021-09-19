import React, {Component} from 'react';
import Title from '../elements/title.js';
//import Main from '../elements/main.js';
import data from '../Data.js';
//import Product from '../elements/product.html';


class HomeScreen extends Component {
    render() {
        return (  
            <div className="box">
                <Title/>
                <div class="row center">
                    {data.products.map((product) => (
                    <div key={product._id} className="card">
                   <a href={`/product/${product._id}`}>
                   <img className="images" src={product.image} alt={product.name}/>
                   </a>
                   <p>{product.name}</p>
                   <p>{product.price}$</p>
                   </div>))}                   
                </div>
            </div>   
        );
    }
}
export default HomeScreen