//import {useQuery} from '@apollo/client';
//import {gql} from '@apollo/client';
//import {gql} from 'graphql-tag';
import { graphql } from 'graphql';
import React, {Component, Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
//import {gql} from 'graphql-tag';

const PRODID = gql`
query {
    category{
      products{
        id
        name
        gallery
        description
        category
        prices{
          currency
          amount
        }
      }
    }
}
`;
export default PRODID;

  
