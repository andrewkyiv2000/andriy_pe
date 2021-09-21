import React, {Component, useState, useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import Title from '../elements/title.js';
import HOMESCR from '../GraphQL/Queries.js';


const HomeScreen = () => {
    const{loading, error, data} = useQuery(HOMESCR)
    
        if (loading) return <p>loading...</p>
        const filtered = data.category.products.slice(0,6)
        console.log(filtered);
        
        return (
            <div className="box">
                <Title/>
                <div className="row center">
                    {filtered.map(display=>(
                        <div key={display.id} className="card">
                            <a href={`/product/${display.id}`}>
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


