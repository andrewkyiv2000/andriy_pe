//import {useQuery} from '@apollo/client';
//import {gql} from '@apollo/client';
//import {gql} from 'graphql-tag';
import { graphql } from 'graphql';
import React, {Component, Fragment} from 'react';
//import { gql, useQuery } from '@apollo/client';
import { gql, useQuery } from '@apollo/client'
//import gql from 'graphql-tag';

const PRODID = gql`
query ProductByID($id:String!) {
  product(id:$id) {
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency
      amount
    }
    brand
  }
}
`;
export default PRODID;


