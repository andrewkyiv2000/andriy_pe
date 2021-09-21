import {useQuery, gql} from '@apollo/client';

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
export default HOMESCR