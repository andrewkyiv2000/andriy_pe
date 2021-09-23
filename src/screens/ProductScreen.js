import { render } from '@testing-library/react';
import React, {Component, useEffect, useState, Fragment} from 'react';
import { gql, useQuery, useLazyQuery} from "@apollo/client";
//import {Query} from '@apollo/client/react/components';
//import { Query } from '@apollo/client';
//import {gql} from 'graphql-tag';

//import HomeScreen from './HomeScreen.js';
//import {useHistory, useParams, withRouter } from 'react-router-dom';
//import { graphql } from 'graphql';
//import data from '../Data.js';
import PRODID from '../GraphQL/ProductId.js';
//import HOMESCR from '../GraphQL/Queries.js';
import NotFound from './NotFound.js';
//import Card from '../elements/card.js';

const Products =()=> {
    
    const {loading, error, data} = useQuery(PRODID);
    
    if (loading) return <div>'Loading...'</div>;
    if (error) return <div>`Error! ${error.message}`</div>;
    if (!data) return <p>Nothing to show...</p>
    
    return (
        <div>
             {data.category.products.map(product=>(
                        <div key={product.id}>
                            <img className="images" src={product.gallery}></img>
                            <p>{product.id}</p>
                        </div>
                    ))}
        </div>
        );
    };

export default Products;



