import React, {Component, Fragment} from 'react';
import {useQuery, gql} from '@apollo/client';
import { graphql } from 'graphql';


const HOMESCR = gql `
query Category {
  category {
    name
    products {
      id
    }
  }
}
`;


/*const HOMESCR = gql`
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
*/

export default HOMESCR