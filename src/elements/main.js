import React, {Component} from 'react';
import data from '../Data.js';


class Main extends Component {
   render() {
      return (
         <div className="box">
         <div class="row center">
                {data.products.map((product) => (
                <div key={product._id} className="card">
                   <a href={`/product/${product._id}`}></a>
                   <p>img: {product.SKU}</p>
                   <p>Name: {product.name}</p>
                   <p>Price: {product.price}$</p>
                </div>))}                            
          </div>
      </div>
      );
   }
}
export default Main

/*
export default function Main () {
   return (
    <div className="box">
       <div class="row center">
              {data.products.map((product) => (
              <div key={product._id} className="card">
                 <a href={`/product/${product._id}`}></a>
                 <p>SKU: {product.SKU}</p>
                 <p>Name: {product.name}</p>
                 <p>Price: {product.price}$</p>
                 <p>Size: {product.size}</p>
              </div>))}                            
        </div>
    </div>
   ); 
}
*/   
        

   