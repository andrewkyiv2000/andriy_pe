import React from 'react';
import { gql} from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc';
//import {gql} from 'graphql-tag';

const CAT = gql `
query {
  categories{
    name
    products{
      id
      name
      description
      gallery
      prices{
        currency
        amount
      }
    }
  }
} 
`;

export default CAT;


/*
query product {
    categories{
      products{
        id
      }
    }
  }



  query {
  categories{
    name
    products{
      id
    }
  }
} 
*/


