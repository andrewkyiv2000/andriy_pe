import React, {Component, useState, useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import Title from '../elements/title.js';

const HOMESCR = gql`
query ProductsHome {
  category {
    name
    products {
      id
      name
      gallery
      prices {
        amount
      }
      }
    }
  }
`;

const HomeScreen = () => {
    const {loading, error, data} = useQuery(HOMESCR)
    const [item, setItem] = useState([]); {/*state of Items = our products from Category */}
    useEffect(()=>{
        if (data) {
            setItem(data.category.products.slice(0,7));
        }
    },[data]);
    if (loading) return <p>Loading now...</p>
    const filtered = data.category.products.slice(0,6)
    console.log(data.category.products.slice(0,7));
    

    return (
        <div className="box">
            <Title/>
            <div className="row center">
                {filtered.map(display=>(
                    <div key={display.id} className="card">
                        <a href={`/product/${display.id}`} onClick={()=> setItem(data.category.products.name)}>
                            <img className="images" src={display.gallery.slice(0,1)} alt={display.name}></img>
                            <p>{display.name}</p>
                            <p>{display.prices.amount}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HomeScreen


    



