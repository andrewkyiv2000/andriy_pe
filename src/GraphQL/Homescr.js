import { useQuery, gql } from "@apollo/client";

const HOMESCR = gql`
  query Category {
    category {
      name
      products {
        id
      }
    }
  }
`;

export default HOMESCR;

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
