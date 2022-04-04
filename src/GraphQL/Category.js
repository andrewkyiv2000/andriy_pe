import { gql } from "@apollo/client";

const CAT = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        description
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export default CAT;
