import React, {Component, Fragment} from 'react';
import {useQuery, gql} from '@apollo/client';
import { graphql } from 'graphql';


const TITLECAT = gql `
query {
    categories{
      name
    }
  }
`;


export default TITLECAT;






